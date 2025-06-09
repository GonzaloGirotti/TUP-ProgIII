const models = require('../database/models/index')
const errorsConstants = require('../const/errors')


module.exports = {
        listarTurnoID: async (req, res) => {

            const turns = await models.turno.findAll({ 
                where: {
                    paciente_id: req.params.idPaciente
                },
                include: [
                    {
                        model: models.medico,
                        attributes: ['id', 'nombre', 'apellido']
                    },
                    {
                        model: models.paciente,
                        attributes: ['id', 'nombre', 'apellido']
                    }
                ]
            })
            if(!turns) return next(errorsConstants.TurnoInexistente)

            res.json({ 
                success: true,
                data: {
                    turnos: turns
                }
            })
        },

        crearTurno: (isLocal) => async (req, res, next) => {
            paciente = await models.paciente.findOne({
                where: {
                    id: req.body.paciente_id
                }
            })
            if(!paciente) {
                if(isLocal){
                    return res.render('error', {
                        title: 'Error',
                        message: 'Paciente inexistente.'
                    })
                } else {
                    return next(errorsConstants.PacienteInexistente)
                }
            }
            
            medico = await models.medico.findOne({
                where: {
                    id: req.body.medico_id
                }
            })
            if(!medico) {
                if(isLocal){
                    return res.render('error', {
                        title: 'Error',
                        message: 'Médico inexistente.'
                    })
                } else {
                    return next(errorsConstants.MedicoInexistente)
                }
            }

            const turno = await models.turno.create({
                paciente_id: paciente.id,
                medico_id: medico.id,
                fecha: req.body.fecha,
                hora: req.body.hora
            })

            if(isLocal){
                return res.render('turno_creado', {
                    title: 'Turno Creado',
                    turno: turno,
                    paciente: paciente,
                    medico: medico,
                    fecha: req.body.fecha,
                    hora: req.body.hora
                })
            } else {
                return res.json({
                    success: true,
                    data: {
                        turno: turno
                    }
                })
            }
        },

        listarTurnos: async (req, res, next) => {

            const turns = await models.turno.findAll()

            if(turns.length === 0) return next(errorsConstants.NoHayTurnos)

            return res.json({ 
                success: true,
                data: {
                    turnos: turns
                }
            })
        },

        eliminarTurno: async (req, res, next) => {
            const turno = await models.turno.findOne({
                where: {
                    id: req.params.idTurno
                }
            })

            if(!turno) return next(errorsConstants.TurnoInexistente)

            await turno.destroy()

            res.json({ 
                success: true,
                message: 'Turno eliminado correctamente'
            })
        }
}