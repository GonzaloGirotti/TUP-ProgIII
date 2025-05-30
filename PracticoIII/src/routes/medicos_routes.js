const router = require("express").Router()
const medicoController = require('../controllers/medico_controller')
const validate = require('../middlewares/validate')
const medico_scheme = require('../middlewares/schemes/medico_scheme')

router.get('/', medicoController.listar)
router.post('/',validate(medico_scheme.crearMedico), medicoController.crear)
router.get('/:idMedico', medicoController.listarInfo)

module.exports = router