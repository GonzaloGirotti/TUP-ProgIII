const Joi = require('joi')

let crearUsuario = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    edad: Joi.number().required()
})

module.exports = {crearUsuario}