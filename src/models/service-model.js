'use strict';

module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define('Service', {
        name: {
            notNull: true,
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: 3,
                    msg: "Name must be at least 3 characters in length"
                }
            }
        },

        description: {
            notNull: true,
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: 3,
                    msg: "Description must be at least 3 characters in length"
                }
            }
        },

        price: {
            notNull: true,
            type: DataTypes.FLOAT,
            validate: {
                min: {
                    args: 0
                },
                isFloat: {
                    msg: "Price must be valid"
                }
            }
        },

        time: {
            notNull: true,
            type: DataTypes.FLOAT,
            validate: {
                min: {
                    args: 0
                },
                isFloat: {
                    msg: "Time must be valid"
                }
            }
        },

        status: {
            notNull: false,
            type: DataTypes.ENUM,
            values: ['ACTIVE', 'INACTIVE'],
            defaultValue: 'ACTIVE'
        },

        password: {
            notNull: true,
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: 3,
                    msg: "Password must be at least 3 characters in length"
                }
            }
        }
    });

    return Service;
};