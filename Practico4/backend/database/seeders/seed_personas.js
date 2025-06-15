'use strict'

const models = require('../models/index')

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.persona.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Juan",
                    apellido: "Perez",
                    edad: 20,
                    email: "JJperez@ggg.com"
                }
            }),            
            models.persona.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "Pablo",
                    apellido: "Gimenez",
                    edad: 30,
                    email: "JJGimenez@ggg.com"
                }
            }),
            models.persona.findOrCreate({
                where: {
                    id: "3"
                },
                defaults: {
                    nombre: "Pablo",
                    apellido: "Arauz",
                    edad: 40,
                    email: "JJArauz@ggg.com"
                }
            }),
            models.persona.findOrCreate({
                where: {
                    id: "4"
                },
                defaults: {
                    nombre: "Pedro",
                    apellido: "Ramirez",
                    edad: 25,
                    email: "JJRamirez@ggg.com"
                }
            }),            
            models.persona.findOrCreate({
                where: {
                    id: "5"
                },
                defaults: {
                    nombre: "Pablo",
                    apellido: "Sandunga",
                    edad: 20,
                    email: "JJSandunga@ggg.com"
                }
            }),
        ])
    },
};