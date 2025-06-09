const models = require('../database/models/index');
const pacienteController = require('./paciente_controller');
const turnosController = require('./turnos_controller');

module.exports = {

    home : async (req, res) => {
        try {
        res.render('index', { 
            title: 'Turnero con express',
            message: '¡Bienvenido al sistema de gestión de turnos!',
            paginaListarPacientes: '/api/v1/home/listarPacientes',
            paginaRegistroTurno: '/api/v1/home/registroTurno',
            paginaListarTurnos: '/api/v1/home/listarTurnos',
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
                form_action: '/api/v1/turnos/crearTurnoLocal',
                pacientes: pacientes,
                medicos: medicos
            });
            return;
        } catch (error) {
            res.render('error', { 
                title: 'Error',
                message: 'No se pudo cargar el formulario de registro.'
            });
        }

    },

    listarPacientes : async (req, res) => {
        try {
            await pacienteController.listar(true)(req, res);

        } catch (error) {
            res.render('error', { 
                title: 'Error',
                message: 'No se pudieron listar los pacientes.'
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
    },

    eliminarTurno : async (req, res) => {
        try {
            turnosController.eliminarTurno(req, res);
        } catch(error) {
            res.render('error', { 
                title: 'Error',
                message: 'No se pudo eliminar el turno.'
            });
        }
    },

    listarTurnos : async (req, res) => {
        try {
            const turnos = await models.turno.findAll();
            const pacientes = await models.paciente.findAll();
            const medicos = await models.medico.findAll();

            res.render('turnos', { 
                title: 'Listado de Turnos',
                turnos: turnos,
                pacientes: pacientes,
                medicos: medicos,
                ruta_eliminar: '/api/v1/turnos/eliminarTurno/',
            });

        } catch (error) {
            res.render('error', { 
                title: 'Error',
                message: 'No se pudieron listar los turnos.'
            });
        }
    }
}
