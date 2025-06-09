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

            // Hago la verificación de contraseña
            var passCoincidence = false
            if(user) { // El mail existe
                passCoincidence = bcrypt.compareSync(
                    req.body.password,
                    user.password
                )
            }
            // Si el usuario no existe o la contraseña no coincide, devuelvo un error
            if(!user || !passCoincidence) {
                return next(errorsConstants.CredencialesInvalidas)
            }

            // 2. Si el usuario existe y la contraseña coincide, genero el token
            res.json({
                success: true,
                data: {
                    token: signJWT(user), // Genero el token con el middleware signJWT
                    id: user.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },


    registrarse: async (req, res) => {
        // 1. Verifico que el usuario no exista
        const usuarioFind = await models.usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        if(usuarioFind) {
            return res.status(400).json({
                success: false,
                message: 'El usuario ya existe'
            })
        }

        // 2. Verifico que los campos requeridos esten presentes mediante un middleware de validacion
        // (llamado en el router)

        // 3. Encripto la contraseña y creo el usuario 
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