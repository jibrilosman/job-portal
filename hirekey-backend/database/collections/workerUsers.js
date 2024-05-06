const mongoose = require('mongoose');

const workerUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    skills: [{type: String}],
});

const WorkerUser = mongoose.model('WorkerUser', workerUserSchema);

module.exports = WorkerUser;