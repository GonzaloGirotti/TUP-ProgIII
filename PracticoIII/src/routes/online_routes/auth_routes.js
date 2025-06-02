const router = require("express").Router()
const auth_controller = require('../../controllers/auth_controller')
const validate = require('../../middlewares/validate')
const auth_scheme = require('../../middlewares/schemes/auth_scheme')

router.post('/login',validate(auth_scheme.login), auth_controller.login)
router.post('/registro', validate(auth_scheme.registrarse), auth_controller.registrarse)

module.exports = router