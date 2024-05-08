const express = require('express');
const router = express.Router();
const ContractorUser = require('../database/collections/contractorUsers');


router.post('/contractoruser', async (req, res) => {
    const contractor = new ContractorUser({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        companyName: req.body.companyName,
        companyPhone: req.body.companyPhone,
        companyLocation: req.body.companyLocation,
        companyInterests: req.body.companyInterests,
    });

    try {
        const newContractor = await contractor.save();
        res.status(201).json(newContractor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/contractoruser', async (req, res) => {
    try {
        const contractors = await ContractorUser.find();
        res.json(contractors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/contractoruser/:id', async (req, res) => {
    try {
        const contractor = await ContractorUser.findById(req.params.id);
        res.json(contractor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch('/contractoruser/:id', async (req, res) => {
    try {
        const contractor = await ContractorUser.findById(req.params.id);
        contractor.name = req.body.name;
        contractor.email = req.body.email;
        contractor.password = req.body.password;
        contractor.companyName = req.body.companyName;
        contractor.companyPhone = req.body.companyPhone;
        contractor.companyLocation = req.body.companyLocation;
        contractor.companyInterests = req.body.companyInterests;

        const updatedContractor = await contractor.save();
        res.json(updatedContractor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/contractoruser/:id', async (req, res) => {
    try {
        const contractor = await ContractorUser.findById(req.params.id);
        const deletedContractor = await contractor.remove();
        res.json(deletedContractor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;


// Compare this snippet from hirekey-backend/database/collections/jobPosts.js:
// const mongoose = require('mongoose');
//
// const jobPostSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     location: {
//         type: String,
//         required: true,
//     },
//     skills: [{type: String}],
//     contractorId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'ContractorUser',
//     },
// });

// const JobPost = mongoose.model('JobPost', jobPostSchema);

// module.exports = JobPost;


