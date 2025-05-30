const express = require('express') //Import de express
const globalConstants =  require('./const/globalConstants') //Import de las constantes de uso global
const routerConfig = require('./routes/index_routes') //Import de Configuracion de rutas
const errorHandler = require('./middlewares/error') //Import de las constantes de errores de peticion
let createError = require('http-errors')
const database = require('./database/config/db')

const configuracionMiddlewares = (app) => {
    app.use(express.json()) //puede recibir json
    app.use(express.urlencoded({extended: true})) //entiende los posts y put
    return;
}

const configuracionRouter = (app) => {
    app.use('/api/v1/', routerConfig.rutas_init())
    app.use('/', routerConfig.rutas_auth())

    app.use(function(req,res,next){
        next(createError(404)) // si no encuentra la ruta, envia error 404
    })
    app.use(errorHandler)
}

const init = () => {
    const app = express() //instanciamos express
    configuracionMiddlewares(app) //configurar los middlewares
    configuracionRouter(app) // Configura las rutas
    database.connectDB() //Conecta a la DB

    app.listen(globalConstants.PORT) //Escucha en el puerto definido en las variables
    console.log(`La app se ejecuta en el puerto: ${globalConstants.PORT}`)
}

init();