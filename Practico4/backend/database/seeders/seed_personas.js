'use strict'

const models = require('../models/index')

module.exports = {
    up: async function (queryInterface, Sequelize) {
        await models.persona.findOrCreate({
            where: { id: "1" },
            defaults: {
                nombre: "Juan",
                apellido: "Perez",
                email: "JJperez@ggg.com",
                edad: 20
            }
        });
        await models.persona.findOrCreate({
            where: { id: "2" },
            defaults: {
                nombre: "Ana",
                apellido: "Gomez",
                email: "ana.gomez@example.com",
                edad: 25
            }
        });
        await models.persona.findOrCreate({
            where: { id: "3" },
            defaults: {
                nombre: "Luis",
                apellido: "Martinez",
                email: "luis.martinez@example.com",
                edad: 30
            }
        });
        await models.persona.findOrCreate({
            where: { id: "4" },
            defaults: {
                nombre: "Maria",
                apellido: "Lopez",
                email: "maria.lopez@example.com",
                edad: 22
            }
        });
        await models.persona.findOrCreate({
            where: { id: "5" },
            defaults: {
                nombre: "Carlos",
                apellido: "Diaz",
                email: "carlos.diaz@example.com",
                edad: 28
            }
        });
    }
};