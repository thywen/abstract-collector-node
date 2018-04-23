const mongoose = require('mongoose')
require('../models/Abstract')
const Abstract = mongoose.model('abstract')

const saveAbstract = (abstract) => {
    return new Abstract(abstract).save()
}

const getAbstracts = () => {
    return Abstract.find({}).sort({ date: 'desc' })
}

const findOneAbstract = (id) => {
    return Abstract.findOne({
        _id: id
    }).then(abstract => {
        return abstract;
    })
}

module.exports = {
    saveAbstract, getAbstracts, findOneAbstract
};
