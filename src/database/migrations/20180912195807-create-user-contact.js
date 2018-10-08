'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('UserContact', {
            number: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onDelete: 'set null'
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            }
        });
    },

    down: (queryInterface) => {
        queryInterface.dropTable('UserContact');
    }
};
