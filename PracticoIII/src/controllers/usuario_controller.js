const models = require('../database/models/index')
const errorsConstants = require('../const/errors')

module.exports = {

    listar: async (req, res) => {
        const users = await models.usuario.findAll();

        res.json({
            success: true,
            data: {
                usuarios: users
            }
        })
    },

    crear: async (req, res) => {
        const user = await models.usuario.create(req.body)

        res.json({
            success: true,
            data: {
                id: user.id
            }
        })
    },

    listarInfo: async (req, res) => {
        const user = await models.usuario.findOne({ //GET de usuario por ID donde ID es el pasado en la ruta
            where: {
                id: req.params.idUsuario
            }
        })
        if(!user) return next(errorsConstants.UsuarioInexistente)
        /*Si el usuario no existe (es null o vacio), a la siguiente funcion que se llame le pasa
        el argumento "errorsConstants...".*/

        res.json({
            success: true,
            data: {
                usuario: user
            }
        })
    },

    prueba: async (req, res) => {
        try {
            console.log("Ejecutando prueba")

            res.json({
                message: "Hola mundo!"
            })
        }catch(err) {
            console.log(err)
        }
    }
}