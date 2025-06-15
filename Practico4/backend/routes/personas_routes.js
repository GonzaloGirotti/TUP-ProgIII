const router = require("express").Router()
const persona_controller = require('../controllers/persona_controller')

router.get('/', persona_controller.listar)

module.exports = router