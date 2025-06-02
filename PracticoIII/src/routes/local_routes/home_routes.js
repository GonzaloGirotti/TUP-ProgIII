const router = require("express").Router()
const homeController = require('../../controllers/home_controller')

router.get('/', homeController.home)
router.get('/listarPacientes', homeController.listarPacientes)
router.get('/modificarPaciente/:idPaciente', homeController.modificarPaciente)

module.exports = router;
