const models = require('../database/models/index.js');

module.exports = {
        listar: async (req, res) => {
        const people = await models.persona.findAll();

        res.json({
            success: true,
            data: {
                personas: people
            }
        })
    }
}