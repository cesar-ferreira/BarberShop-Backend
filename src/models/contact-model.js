'use strict';

const { User } = require('./user-model');

module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define('Contact', {
        number: {
            notNull: true,
            type: DataTypes.STRING,

        },

    });

    Contact.associate = (models) => {
        Contact.User = Contact.belongsTo(models.User, {
            foreignKey: {
                name: 'userId',
                as: 'userId'
            },
            onDelete: 'set null'
        });
    };

    return Contact;
};