const router = require("express").Router()
const pacienteController = require('../controllers/paciente_controller')
const validate = require('../middlewares/validate')
const paciente_scheme = require('../middlewares/schemes/paciente_scheme')

router.get('/', pacienteController.listar)
router.post('/',validate(paciente_scheme.crearPaciente), pacienteController.crear)
router.get('/:idPaciente', pacienteController.listarInfo)

module.exports = router