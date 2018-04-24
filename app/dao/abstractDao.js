const mongoose = require('mongoose')
require('../models/Abstract')
const Abstract = mongoose.model('abstract')

const saveAbstract = async (abstract) => {
    await new Abstract(abstract)
        .save()
        .then(() => {
            return true;
        })
}

const getAbstracts = async () => {
    return await Abstract.find({})
        .sort({ date: 'desc' })
}

const findOneAbstract = (id) => {
    let abstract = Abstract.findOne({
        _id: id
    })
    if (abstract) {
        return abstract
    }

}

const deleteAbstract = async (id) => {
    let abstract = await Abstract
        .remove({
            _id: id
        }).then(() => {
            return true
        })
}

module.exports = {
    saveAbstract, getAbstracts, findOneAbstract, deleteAbstract
};
