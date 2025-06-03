const router = require("express").Router()
const turnoController = require('../../controllers/turnos_controller')
const validate = require('../../middlewares/validate')
const turnoScheme = require('../../middlewares/schemes/turno_scheme')

router.get('/:idPaciente', turnoController.listarTurnoID)
router.get('/', turnoController.listarTurnos)
router.post('/', validate(turnoScheme.crearTurno), turnoController.crearTurno)

module.exports = router