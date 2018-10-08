// App Imports
const { Schedule } = require('../../models');

// Get schedule by ID
exports.getById = async function (parentValue, {id}) {
    return await Schedule.findOne({where: {id}})
};

// Get all schedules
exports.getAll = async function () {
    return await Schedule.findAll()
};

// Create schedule
exports.create = async function (parentValue, {timestamp}) {
    return await Schedule.create({
        timestamp
    })
};

// Delete schedule
exports.remove = async function (parentValue, {id}) {
    return await Schedule.destroy({where: {id}})
};