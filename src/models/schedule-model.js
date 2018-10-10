'use strict';

module.exports = (sequelize, DataTypes) => {
    const Schedule = sequelize.define('Schedule', {
        timestamp: {
            notNull: true,
            type: DataTypes.DATE
        }
    });

    Schedule.associate = (models) => {

        Schedule.User = Schedule.belongsTo(models.User, {
            foreignKey: {
                name: 'userId',
                as: 'userId'
            },
            onDelete: 'set null'
        });

        Schedule.Service = Schedule.belongsTo(models.Service, {
            foreignKey: {
                name: 'serviceId',
                as: 'serviceId'
            },
            onDelete: 'set null'
        });

    };

    return Schedule;
};