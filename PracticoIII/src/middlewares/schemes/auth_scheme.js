const Joi = require('joi')

let login = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})

module.exports = {login}