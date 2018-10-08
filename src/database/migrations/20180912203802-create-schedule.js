'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('Schedule', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onDelete: 'set null'
            },
            serviceId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
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
        });
    },

    down: (queryInterface) => {
        queryInterface.dropTable('Schedule');
    }
};
