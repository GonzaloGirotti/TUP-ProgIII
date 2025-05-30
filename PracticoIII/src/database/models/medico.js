'use strict'

module.exports = (sequelize, DataTypes) => {

    let Medico = sequelize.define('medico', {
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
            type: DataTypes.INTEGER
        },
        especialidad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hospital: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        underscored: true,
        paranoid: true,
        freezeTableName: true
    })

    Medico.associate = models => {
        Medico.hasMany(models.turno, {
            foreignKey: 'medico_id'
        })
    } // Crea la asociacion con la tabla intermedia usuario_medico que relaciona usuario y medico
      // Relacion muchos a muchos por lo que usuario tambien declara usuario.hasMany

    return Medico
}