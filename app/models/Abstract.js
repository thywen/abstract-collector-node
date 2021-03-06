const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AbstractsSchema = new Schema({
    title:{
      type: String,
      required: true
    },
    details:{
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });


  module.exports = mongoose.model('abstract', AbstractsSchema);
