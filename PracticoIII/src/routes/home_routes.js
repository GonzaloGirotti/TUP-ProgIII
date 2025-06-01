const router = require("express").Router()
const homeController = require('../controllers/home_controller')

router.get('/', homeController.home)
router.get('/listarPacientes', homeController.listarPacientes)

module.exports = router;
