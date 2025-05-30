const models = require('../database/models/index')
const errorsConstants = require('../const/errors')

module.exports = {

    listar: async (req, res) => {
        const medics = await models.medico.findAll();

        res.json({
            success: true,
            data: {
                medicos: medics
            }
        })
    },

    crear: async (req, res) => {
        const medic = await models.medico.create(req.body)

        res.json({
            success: true,
            data: {
                id: medic.id
            }
        })
    },

    listarInfo: async (req, res) => {
        const medic = await models.medico.findOne({
            where: {
                id: req.params.idMedico
            }
        })
        if(!medic) return next(errorsConstants.MedicoInexistente)

        res.json({
            success: true,
            data: {
                medico: medic
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