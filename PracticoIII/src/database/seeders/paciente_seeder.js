'use strict'

const models = require('../models/index')
const bcrypt = require('bcryptjs')

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.paciente.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Juan",
                    apellido: "Perez",
                    email: "JJperez@ggg.com",
                    edad: 20
                }
            }),
        ])
    },
};