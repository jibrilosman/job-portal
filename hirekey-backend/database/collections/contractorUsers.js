const mongoose = require('mongoose');

const contractorUserSchema = new mongoose.Schema({
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
    companyName: {
        type: String,
        required: true,
    },
    companyPhone: {
        type: String,
        required: true,
    },
    companyLocation: {
        type: String,
        required: true,
    },
    companyInterests: [{type: String}],
});

const ContractorUser = mongoose.model('ContractorUser', contractorUserSchema);

module.exports = ContractorUser;