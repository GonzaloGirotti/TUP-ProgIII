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
                pacientes: pacientes,
                ruta_eliminar: '/api/v1/home/eliminarPaciente/',
                ruta_modificar: '/api/v1/home/modificarPaciente/',
            });

        } catch (error) {
            res.render('pacientes', { 
                title: 'Error',
                message: 'No se pudieron listar los pacientes.'
            });
        }
    },
    
    modificarPaciente : async (req, res) => {
        try {
            const paciente = await models.paciente.findOne({
                where: { id: req.params.idPaciente }
            })

            if (!paciente) {
                return res.status(404).render('error', { 
                    title: 'Error',
                    message: 'Paciente no encontrado.'
                });
            }

            res.render('modificar_paciente', { 
                title: 'Modificar Paciente',
                paciente: paciente,
                form_action: '/api/v1/pacientes/modificar/' + paciente.id,
                ruta_pacientes: '/api/v1/home/listarPacientes',
            });

        } catch (error) {
            res.render('error', { 
                title: 'Error',
                message: 'No se pudo modificar el paciente.'
            });
        }
    }

}
