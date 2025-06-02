const Joi = require('joi')

let crearPaciente = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().optional(),
    edad: Joi.number().required()
})

let modificarPaciente = Joi.object({
    nombre: Joi.string().optional(),
    apellido: Joi.string().optional(),
    email: Joi.string().optional(),
    edad: Joi.number().optional()
})

module.exports = {crearPaciente}