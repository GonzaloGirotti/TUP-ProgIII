const models = require('../database/models/index')

module.exports = {

    home : async (req, res) => {
        res.render('index', { 
            title: 'Turnero con express',
            message: '¡Bienvenido al sistema de gestión de turnos!'
            });
    },

    listarPacientes : async (req, res) => {
        try {
            const pacientes = await models.paciente.findAll()
        
            res.render('pacientes', { 
                title: 'Listado de Pacientes',
                pacientes: pacientes
            });

        } catch (error) {
            res.render('pacientes', { 
                title: 'Error',
                message: 'No se pudieron listar los pacientes.'
            });
        }
    }

}
