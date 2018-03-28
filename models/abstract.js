const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AbstractScheme = new Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    proposedToConference: {
        type: Boolean,
        default: false
    }
});

mongoose.model('abstracts', AbstractScheme);