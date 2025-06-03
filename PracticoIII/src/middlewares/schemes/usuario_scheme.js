const Joi = require('joi')

let crearUsuario = Joi.object({
    nombre_usuario: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
})

module.exports = {crearUsuario}