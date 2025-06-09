const express = require('express') //Import de express
const globalConstants =  require('./const/globalConstants') //Import de las constantes de uso global
const routerConfig = require('./routes/index_routes') //Import de Configuracion de rutas
const errorHandler = require('./middlewares/error') //Import de las constantes de errores de peticion
let createError = require('http-errors')
const database = require('./database/config/db')
const  dotenv = require('dotenv');
const path = require('path')

const configuracionMiddlewares = (app) => {
    app.use(express.json()) //puede recibir json
    app.use(express.urlencoded({extended: true})) //entiende los posts y put
    return;
}

const configuracionRouter = (app) => {
    app.use('/api/v1/', routerConfig.rutas_init())  // rutas iniciales
    app.use('/', routerConfig.rutas_auth())  // rutas de autenticacion

    app.use(function(req,res,next){
        next(createError(404)) // si no encuentra la ruta, envia error 404
    })
    app.use(errorHandler)
}

  const engine = (app, template) => {  // configuracion del motor de plantillas
     try{
       require.resolve(template);
       app.set('view engine', template)
       app.set('views', './src/views/')
     } catch (error) {
        console.log('Error al configurar el motor de plantillas:',template)
      }
  }


const init = () => {
    const app = express() // instanciamos express
    configuracionMiddlewares(app) // configurar los middlewares
    database.connectDB() // conecta a la DB

    engine(app, process.env.TEMPLATE) // configurar el motor de plantillas

    configuracionRouter(app) // configurar rutas

    app.listen(globalConstants.PORT)
    console.log(`La app se ejecuta en el puerto: ${globalConstants.PORT}`)
}

init();