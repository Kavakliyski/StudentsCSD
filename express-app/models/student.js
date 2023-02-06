const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    faculty_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date_of_creation: {
        type: Date,
        required: true,
        default: Date.now
    }
});


module.exports = mongoose.model('Student', studentSchema)