'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            notNull: true,
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: 3,
                    msg: "Name must be atleast 3 characters in length"
                }
            }
        },
        
        username: {
            notNull: true,
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: 3,
                    msg: "Username must be atleast 3 characters in length"
                }
            }
        },
        
        email: {
            notNull: true,
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [6, 128],
                    msg: "Email address must be between 6 and 128 characters in length"
                },
                isEmail: {
                    msg: "Email address must be valid"
                }
            }
        },
        
        dateOfBirth: {
            notNull: false,
            type: DataTypes.DATE,
        },

        password: {
            notNull: true,
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: 3,
                    msg: "Password must be atleast 3 characters in length"
                }
            }
        }
    });

    return User;
};