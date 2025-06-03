const Joi = require('joi')

let crearTurno = Joi.object({
    paciente_id: Joi.number().required(),
    medico_id: Joi.number().required(),
    fecha: Joi.date().required(),
    hora: Joi.string().pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/).required()
    // Validación de hora en formato HH:MM con Regex(24 horas)
})

module.exports = {crearTurno}