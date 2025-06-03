'use strict'

module.exports = (sequelize, DataTypes) => {

    let Usuario = sequelize.define('usuario', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nombre_usuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        underscored: true,
        paranoid: true,
        freezeTableName: true
    })

    Usuario.associate = models => {}

    return Usuario
}