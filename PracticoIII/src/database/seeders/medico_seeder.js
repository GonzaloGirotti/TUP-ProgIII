'use strict'

const models = require('../models/index')
const bcrypt = require('bcryptjs')

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.medico.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Juancito",
                    apellido: "Medico de Primera",
                    email: "Supermedico@medicomail.com",
                    edad: 45,
                    especialidad: "Cardiologia",
                    hospital: "Hospital Central"
                }
            }),
        ])
    },
};