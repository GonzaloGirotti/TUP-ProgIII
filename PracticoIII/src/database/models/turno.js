'use strict'

module.exports = (sequelize, DataTypes) => {

    let Turno = sequelize.define('turno', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        hora: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: true,
        underscored: true,
        paranoid: true,
        freezeTableName: true
    })

    Turno.associate = models => {
        Turno.belongsTo(models.paciente, {
            foreignKey: 'paciente_id'
        })
        Turno.belongsTo(models.medico, {
            foreignKey: 'medico_id'
        })
    }

    return Turno
}