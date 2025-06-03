const { Router } = require('express')
const medicosRoutes = require('../routes/online_routes/medicos_routes')
const pacientesRoutes = require('../routes/online_routes/pacientes_routes')
const authRoutes = require('../routes/online_routes/auth_routes')
const homeRoutes = require('../routes/local_routes/home_routes')
const turnosRoutes = require('../routes/online_routes/turnos_routes')

const decodeJWT = require('../middlewares/decodeJWT')


const rutas_init = () => {
    const router = Router()

    router.use("/medicos", decodeJWT, medicosRoutes)
    router.use("/pacientes", pacientesRoutes)
    router.use("/home", homeRoutes)
    router.use("/turnos", turnosRoutes)

    return router
}

const rutas_auth = () => {
    const router = Router()

    router.use("/auth", authRoutes)

    return router
}

module.exports = { rutas_init, rutas_auth }