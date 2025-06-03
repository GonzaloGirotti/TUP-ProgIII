const models = require('../database/models/index');
const pacienteController = require('./paciente_controller');

module.exports = {

    home : async (req, res) => {
        try {
        res.render('index', { 
            title: 'Turnero con express',
            message: '¡Bienvenido al sistema de gestión de turnos!',
            paginaListarPacientes: '/api/v1/home/listarPacientes',
            paginaRegistroTurno: '/api/v1/home/registroTurno'
            });
        } catch (error) {
            res.render('error', { 
                title: 'Error',
                message: 'No se pudo cargar la página de inicio.'
            });
        }
    },

    registroTurno : async (req, res) => {
        try {
            const pacientes = await models.paciente.findAll();
            const medicos = await models.medico.findAll();

            if (!pacientes || pacientes.length === 0) {
                return res.render('error', { 
                    title: 'Error',
                    message: 'No hay pacientes registrados. Por favor, registre al menos un paciente antes de registrar un turno.'
                });
            }
            if (!medicos || medicos.length === 0) {
                return res.render('error', { 
                    title: 'Error',
                    message: 'No hay médicos registrados. Por favor, registre al menos un médico antes de registrar un turno.'
                });
            }

            res.render('registro_turno', { 
                title: 'Registro de Turno',
                message: 'Registra un nuevo turno',
                form_action: '/api/v1/turnos/',
                pacientes: pacientes,
                medicos: medicos
            });
        } catch (error) {
            res.render('error', { 
                title: 'Error',
                message: 'No se pudo cargar el formulario de registro.'
            });
        }

    },

    loginUsuario : async (req, res) => {
        try {
            res.render('login', { 
                title: 'Inicio de Sesión',
                form_action: '/auth/login'
            });
        } catch (error) {
            res.render('error', { 
                title: 'Error',
                message: 'No se pudo cargar el formulario de inicio de sesión.'
            });
        }
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
    },

    eliminarPaciente : async (req, res) => {
        try {
            pacienteController.eliminar(req, res);
        } catch(error) {
            res.render('error', { 
                title: 'Error',
                message: 'No se pudo eliminar el paciente.'
            });
        }
    }

}
