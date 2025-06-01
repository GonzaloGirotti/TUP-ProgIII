const { Router } = require('express')
const usuarioRoutes = require('../routes/usuarios_routes')
const medicosRoutes = require('../routes/medicos_routes')
const pacientesRoutes = require('../routes/pacientes_routes')
const authRoutes = require('../routes/auth_routes')
const homeRoutes = require('../routes/home_routes')

const decodeJWT = require('../middlewares/decodeJWT')


const rutas_init = () => {
    const router = Router()

    router.use("/usuarios", decodeJWT, usuarioRoutes)
    router.use("/medicos", decodeJWT, medicosRoutes)
    router.use("/pacientes", decodeJWT, pacientesRoutes)
    router.use("/home", homeRoutes)

    return router
}

const rutas_auth = () => {
    const router = Router()

    router.use("/auth", authRoutes)

    return router
}

module.exports = { rutas_init, rutas_auth }