'use strict';
module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define('Roles', {
        roleName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isValid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });

    Roles.associate = (models) => {
        Roles.belongsTo(models.Users, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
        });
    };

    return Roles;
};