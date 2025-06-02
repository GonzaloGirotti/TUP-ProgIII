const models = require('../database/models/index')
const errorsConstants = require('../const/errors')

module.exports = {

    listar: async (req, res) => {
        const patients = await models.paciente.findAll();

        res.json({
            success: true,
            data: {
                pacientes: patients
            }
        })
    },

    crear: async (req, res) => {
        const patient = await models.paciente.create(req.body)

        res.json({
            success: true,
            data: {
                id: patient.id
            }
        })
    },

    listarInfo: async (req, res) => {
        const patient = await models.paciente.findOne({ //GET de paciente por ID donde ID es el pasado en la ruta
            where: {
                id: req.params.idPaciente
            },
            include: [{ // Incluimos info de la tabla paciente_medico
                model: models.paciente_medico,
                include: [{
                    model: models.medico
                }] // Con este segundo include, incluimos info del medico asociado
            }]
        })
        if(!patient) return next(errorsConstants.PacienteInexistente)
        /*Si el paciente no existe (es null o vacio), a la siguiente funcion que se llame le pasa
        el argumento "errorsConstants...".*/

        res.json({
            success: true,
            data: {
                paciente: patient
            }
        })
    },

    modificar: async (req, res, next) => {
        const patient = await models.paciente.findOne({
            where: {
                id: req.params.idPaciente
            }
        })

        if(!patient) return next(errorsConstants.PacienteInexistente)

        await patient.update(req.body)

        res.json({
            success: true,
            data: {
                paciente: patient
            }
        })
    }
}