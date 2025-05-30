const router = require("express").Router()
const usuarioController = require('../controllers/usuario_controller')
const validate = require('../middlewares/validate')
const usuario_scheme = require('../middlewares/schemes/usuario_scheme')

router.get('/', usuarioController.listar)
router.post('/',validate(usuario_scheme.crearUsuario), usuarioController.crear)
router.get('/:idUsuario', usuarioController.listarInfo)

module.exports = router