const express = require('express') 
const routerConfig = require('./routes/index_routes') 
let createError = require('http-errors')
const database = require('./database/config/db')
const globalConstants = require('./const/globalconstants')
const  dotenv = require('dotenv');
const path = require('path')

const configuracionMiddlewares = (app) => {
    app.use(express.json()) 
    app.use(express.urlencoded({extended: true})) 
    return;
}

const configuracionRouter = (app) => {
    app.use('/api/v1/', routerConfig.rutas_init())

    app.use(function(req,res,next){
        next(createError(404)) 
    })
}

  const engine = (app, template) => {
     try{
       require.resolve(template);
       app.set('view engine', template)
       app.set('views', './src/views/')
     } catch (error) {
        console.log('Error al configurar el motor de plantillas:',template)
      }
  }


const init = () => {
    const app = express() 
    configuracionMiddlewares(app) 
    database.connectDB() 
    engine(app, process.env.TEMPLATE) 

    configuracionRouter(app) 

    app.listen(globalConstants.PORT)
    console.log(`La app se ejecuta en el puerto: ${globalConstants.PORT}`)
}

init();