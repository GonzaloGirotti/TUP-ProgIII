const Joi = require('joi')

let login = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})

let registrarse = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    edad: Joi.number().required()
})

module.exports = {login}