const router = require("express").Router()
const turnoController = require('../../controllers/turnos_controller')
const validate = require('../../middlewares/validate')
const turnoScheme = require('../../middlewares/schemes/turno_scheme')
const decodeJWT = require('../../middlewares/decodeJWT')


router.get('/:idPaciente', turnoController.listarTurnoID)
router.get('/', turnoController.listarTurnos)
router.post('/crearTurnoAPI', decodeJWT, validate(turnoScheme.crearTurno), turnoController.crearTurno(false))
router.post('/crearTurnoLocal', validate(turnoScheme.crearTurno), turnoController.crearTurno(true))
router.delete('/eliminar/:idTurno', turnoController.eliminarTurno)

module.exports = router