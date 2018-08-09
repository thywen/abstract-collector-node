const mongoose = require('mongoose');
require('../models/User');
const User = mongoose.model('user');
const passwordHasher = require('../security/passwordHasher');

const saveNewUser = async user => {
    user.password = await passwordHasher.hashPassword(user.password)
    console.log(user)
    await new User(user)
        .save()
        .then(() => {
            return true
        })
};

module.exports = {saveNewUser};