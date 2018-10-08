'use strict';

const { User } = require('./user-model');

module.exports = (sequelize, DataTypes) => {
    const UserContact = sequelize.define('UserContact', {
        number: {
            notNull: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            validate: {
                len: {
                    args: 3,
                    msg: "Name must be at least 3 characters in length"
                }
            }
        },

    });

    UserContact.associate = (models) => {
        UserContact.User = UserContact.belongsTo(models.User, {
            foreignKey: {
                name: 'id',
                as: 'userId'
            },
            onDelete: 'set null'
        });
    };

    return UserContact;
};