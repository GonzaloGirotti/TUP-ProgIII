require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 5000,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET
}