const jwt = require('jsonwebtoken')
const globalConstants = require('../const/globalConstants')

module.exports = function (usuario) { // Recibe usuario por parametro
    if (usuario) {

        //se genera el token con los datos del usuario
        const token = jwt.sign({
            id: usuario.id
        },
            globalConstants.JWT_SECRET, //clave secreta para encriptar token
            {
                expiresIn: '30m' // expira en 30 minutos
            }
        )
        return token
    } else {
        return null // no usuario, devuelvo null
    }
}