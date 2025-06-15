const { Router } = require('express')
const personasRoutes = require('../routes/personas_routes')


const rutas_init = () => {
    const router = Router()

    router.use("/personas", personasRoutes)

    return router
}

module.exports = { rutas_init }