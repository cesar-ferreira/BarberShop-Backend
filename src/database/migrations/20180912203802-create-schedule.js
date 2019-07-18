'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return Promise.resolve()
            .then(() =>
        queryInterface.createTable('Schedules', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: false,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onDelete: 'set null'
            },
            serviceId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: false,
                references: {
                    model: 'Services',
                    key: 'id'
                },
                onDelete: 'set null'
            },
            timestamp: {
                allowNull: false,
                type: Sequelize.DATE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            }
        }));
    },

    down: async (queryInterface) => {
        queryInterface.dropTable('Schedules');
    }
};
