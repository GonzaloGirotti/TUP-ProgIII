const router = require("express").Router()
const turnoController = require('../../controllers/turnos_controller')

router.get('/:idPaciente', turnoController.listarTurnoID)
router.post('/', turnoController.crearTurno)

module.exports = router