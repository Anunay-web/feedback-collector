const mongoose = require('mongoose');

/**
 * Stores feedback submitted by users
 */

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    message: {
        type: String,
        required: true,
        trim: true
    },
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Feedback', feedbackSchema);