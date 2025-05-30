const models = require('../database/models/index')
const errorsConstants = require('../const/errors')

module.exports = {
        listarTurnoID: async (req, res) => {

        //GET de turnos del paciente por ID donde ID es el pasado en la ruta
            const turns = await models.turno.findOne({ 
                where: {
                    paciente_id: req.params.idPaciente
                }
            })

            if(!turns) return next(errorsConstants.TurnoInexistente)
            /*Si el turno no existe (es null o vacio), a la siguiente funcion que se llame le pasa
            el argumento "errorsConstants...".*/
    
            // Respuesta con los turnos del paciente
            res.json({ 
                success: true,
                data: {
                    turnos: turns
                }
            })
        },

        // crearTurno : async (req, res) => {
        //     const turno = await models.turno.create({
                
        //     })
        // }
}