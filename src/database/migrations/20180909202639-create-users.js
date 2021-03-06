'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.resolve()
            .then(() =>
        queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            username: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true,

            },
            email: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true,
            },
            dateOfBirth: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        }));
    },

    down: (queryInterface) => {
        queryInterface.dropTable('Users');
    }
};
