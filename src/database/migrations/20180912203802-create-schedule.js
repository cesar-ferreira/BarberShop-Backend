'use strict';

module.exports = {
    up: (queryInterface, DataTypes) => {
        queryInterface.createTable('Schedule', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onDelete: 'set null'
            },
            serviceId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Services',
                    key: 'id'
                },
                onDelete: 'set null'
            },
            timestamp: {
                allowNull: false,
                type: DataTypes.DATE
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            }
        });
    },

    down: (queryInterface) => {
        queryInterface.dropTable('Schedule');
    }
};
