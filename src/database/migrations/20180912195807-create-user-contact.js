'use strict';

module.exports = {
    up: (queryInterface, DataTypes) => {
        queryInterface.createTable('UserContact', {
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
        queryInterface.dropTable('UserContact');
    }
};
