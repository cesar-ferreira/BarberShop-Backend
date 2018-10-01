// App Imports
const {User} = require('../../models');

// Get user by ID
exports.getById = async function (parentValue, {id}) {
    return await User.findOne({where: {id}})
};

// Get all users
exports.getAll = async function () {
    return await User.findAll()
};

// Create user
exports.create = async function (parentValue, {name, username, email, dateOfBirth, password}) {
    return await User.create({
        name,
        username,
        email,
        dateOfBirth,
        password
    })
};

// Delete user
exports.remove = async function (parentValue, {id}) {
    return await User.destroy({where: {id}})
};