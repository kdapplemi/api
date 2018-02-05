'use strict';
module.exports = (sequelize, DataTypes) => {
    var Users = sequelize.define('Users', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Users.associate = (models) => {
        Users.hasMany(models.Roles, {
            foreignKey: 'userId',
            as: 'userRoles',
        });
    };
    return Users;
};