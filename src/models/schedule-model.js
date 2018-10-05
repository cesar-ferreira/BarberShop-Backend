'use strict';

module.exports = (sequelize, DataTypes) => {
    const Schedule = sequelize.define('Schedule', {
        timestamp: {
            notNull: true,
            type: DataTypes.DATE
        }
    });

    Schedule.associate = (models) => {

        Schedule.belongsTo(models.User, {
            foreignKey: {
                name: 'id',
                as: 'userId'
            },
            onDelete: 'set null'
        });

        Schedule.belongsTo(models.Service, {
            foreignKey: {
                name: 'id',
                as: 'serviceId'
            },
            onDelete: 'set null'
        });

    };

    return Schedule;
};