const mongoose = require('mongoose')

const EmailSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: [true, 'Please name your project']
    },
    clientName: {
        type: String,
        required: [true, 'Please add your name']
    },
    email: {
        type: String,
        required: [true, 'Please add your email']
    },
    projectDescription: {
        type: String,
        required: [true, 'Please add project description']
    },
    budget: {
        type: String,
        required: [true, 'Please add your budget'],
        enum: ['<1k', '1k-5k', '5k-10k', '10k+']
    },
    projectType: {
        type: String,
        required: [true, 'Please add work request type']
    }
})


module.exports = mongoose.model('Email', EmailSchema)