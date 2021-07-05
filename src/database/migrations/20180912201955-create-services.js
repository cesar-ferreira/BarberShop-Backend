'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.resolve()
            .then(() =>
        queryInterface.createTable('Services', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.ENUM,
                values: ['SERVICE1', 'SERVICE2', 'SERVICE3', 'SERVICE4', 'SERVICE5', 'SERVICE6', 'SERVICE7', 'SERVICE8']
            },
            description: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            price: {
                allowNull: false,
                type: Sequelize.FLOAT,
            },
            time: {
                allowNull: false,
                type: Sequelize.FLOAT,
            },
            status: {
                type: Sequelize.ENUM,
                values: ['ACTIVE', 'INACTIVE'],
                defaultValue: 'ACTIVE'
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

    down: (queryInterface) => {
        queryInterface.dropTable('Services');
    }
};