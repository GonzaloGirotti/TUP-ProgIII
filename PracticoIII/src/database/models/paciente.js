'use strict'

module.exports = (sequelize, DataTypes) => {

    let Paciente = sequelize.define('paciente', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        edad: {
            type: DataTypes.INTEGER,
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: true,
        underscored: true,
        paranoid: true,
        freezeTableName: true
    })

    Paciente.associate = models => {
        Paciente.hasMany(models.turno, {
            foreignKey: 'paciente_id'
        })
    } // Crea la asociacion con la tabla intermedia paciente_medico que relaciona paciente y medico
      // Relacion muchos a muchos por lo que medico tambien declara medico.hasMany

    return Paciente
}