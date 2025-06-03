const Joi = require('joi')

let login = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})

let registrarse = Joi.object({
    nombre_usuario: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required()
})

module.exports = {login, registrarse}