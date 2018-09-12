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
            }
        });
    },

    down: (queryInterface) => {
        queryInterface.dropTable('UserContact');
    }
};
