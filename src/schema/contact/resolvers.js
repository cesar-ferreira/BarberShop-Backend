// App Imports
const { Contact } = require('../../models');

// Get contact by ID
exports.getById = async function (parentValue, {id}) {
    return await Contact.findOne({where: {id}})
};

// Get all contact
exports.getAll = async function () {
    return await Contact.findAll()
};

// Create contact
exports.create = async function (parentValue, {number, userId}) {
    console.log(number, userId);
    return await Contact.create({
        number,
        userId
    })
};

// Delete contact
exports.remove = async function (parentValue, {id}) {
    return await Contact.destroy({where: {id}})
};