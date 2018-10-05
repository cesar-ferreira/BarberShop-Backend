// App Imports
const { Service } = require('../../models');

// Get service by ID
exports.getById = async function (parentValue, {id}) {
    return await Service.findOne({where: {id}})
};

// Get all services
exports.getAll = async function () {
    return await Service.findAll()
};

// Create service
exports.create = async function (parentValue, {name, description, price, time, status}) {
    return await Service.create({
        name,
        description,
        price,
        time,
        status
    })
};

// Delete service
exports.remove = async function (parentValue, {id}) {
    return await Service.destroy({where: {id}})
};