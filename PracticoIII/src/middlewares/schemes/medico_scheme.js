const Joi = require('joi')

let crearMedico = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().optional(),
    edad: Joi.number().optional(),
    especialidad: Joi.string().required(),
    hospital: Joi.string().required()
})

module.exports = {crearMedico}