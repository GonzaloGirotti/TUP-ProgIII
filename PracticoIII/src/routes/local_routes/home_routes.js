const router = require("express").Router()
const homeController = require('../../controllers/home_controller')

router.get('/', homeController.home)
router.get('/listarPacientes', homeController.listarPacientes)
router.get('/registroTurno', homeController.registroTurno)
router.get('/listarTurnos', homeController.listarTurnos)
router.delete('/eliminarPaciente/:idPaciente', homeController.eliminarPaciente)
router.delete('/elminarTurno/:idTurno', homeController.eliminarTurno)

module.exports = router;
