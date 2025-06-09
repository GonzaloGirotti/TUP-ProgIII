const models = require('../database/models/index')
const errorsConstants = require('../const/errors')

module.exports = {

    listar: (isLocal) => async (req, res) => {
        const patients = await models.paciente.findAll();

        if(isLocal){
            res.render('pacientes', { 
                title: 'Listado de Pacientes',
                pacientes: patients,
                ruta_eliminar: '/api/v1/home/eliminarPaciente/'
            });
        } else {
            res.json({
                success: true,
                data: {
                    pacientes: patients
                }
            })
        }
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
        const patient = await models.paciente.findOne({ 
            where: {
                id: req.params.idPaciente
            }
        })
        if(!patient) return next(errorsConstants.PacienteInexistente)

        res.json({
            success: true,
            data: {
                paciente: patient
            }
        })
    },

    eliminar: async (req, res, next) => {
        const patient = await models.paciente.findOne({
            where: {
                id: req.params.idPaciente
            }
        })

        if(!patient) return next(errorsConstants.PacienteInexistente)

        await patient.destroy()

        res.json({
            success: true,
            message: 'Paciente eliminado correctamente'
        })
    }
}