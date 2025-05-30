const JWT = require('jsonwebtoken')
const errorsConstants = require('../const/errors')
const models = require('../database/models/index')
const moment = require('moment')
const globalConstants = require('../const/globalConstants')

module.exports = async function (req, res, next) {

    if(req.header('Authorization') && req.header('Authorization').split(' ').length > 1) {
        try {

            /*Verifico el token y lo decodifico con la clave secreta para obtener los datos
            del usuario que lo creó y los guardo en la variable*/
            let dataToken = JWT.verify(req.header('Authorization').split(' ')[1],
                                        globalConstants.JWT_SECRET)

            if(dataToken.exp <= moment().unix()) return next(errorsConstants.SesionExpirada)
            //Token expirado, devuelvo error
            
            res.locals.token = dataToken

            const usuario = await models.usuario.findOne({
                where: {
                    id: dataToken.id
                }
            })
            if(!usuario) return next(errorsConstants,UsuarioNoAutorizado)

            res.locals.usuario = usuario
            //Me guardo el usuario en el locals para usarlo en las rutas que necesiten al usuario

            next() // TODO OK! paso al siguiente middle o controlador


        } catch (err) {
            return next(errorsConstants.SesionExpirada)
        }
    } else {
        return next(errorsConstants.UsuarioNoAutorizado)
    }
}