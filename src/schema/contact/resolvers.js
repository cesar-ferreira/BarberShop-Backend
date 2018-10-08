// App Imports
const { UserContact } = require('../../models');

// Get contact by ID
exports.getById = async function (parentValue, {id}) {
    return await UserContact.findOne({where: {id}})
};

// Get all contact
exports.getAll = async function () {
    return await UserContact.findAll()
};

// Create contact
exports.create = async function (parentValue, {number}) {
    return await UserContact.create({
        number
    })
};

// Delete contact
exports.remove = async function (parentValue, {id}) {
    return await UserContact.destroy({where: {id}})
};