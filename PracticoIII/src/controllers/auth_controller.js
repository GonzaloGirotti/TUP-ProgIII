const models = require('../database/models/index')
const errorsConstants = require('../const/errors')
const bcrypt = require('bcryptjs') //Import de dependencia de encriptacion
const signJWT = require('../middlewares/signJWT')

module.exports = {
    login: async (req, res, next) => {

        try {
            // 1. Verifico que el user existe, solo buscando por mail
            const user = await models.usuario.findOne({
                where: {
                    email: req.body.email
                }
            })

            var passCoincidence = false
            if(user) { // El mail existe
                passCoincidence = bcrypt.compareSync(
                    req.body.password,
                    user.password
                )
            }
            if(!user || !passCoincidence) {
                return next(errorsConstants.CredencialesInvalidas)
            }

            res.json({
                success: true,
                data: {
                    token: signJWT(user), //Creo el token pasando el user
                    id: user.id

                }
            })
        } catch (err) {
            return next(err)
        }
    },

    registrarse: async (req, res) => {

        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const user = await models.usuario.create(req.body)

        res.json({
            success: true,
            data: {
                id: user.id
            }
        })
    },
}