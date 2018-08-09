let bcrypt = require('bcryptjs');

let hashPassword = (password) => {
    return bcrypt.genSalt(10, (err, salt) => {
        return bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            return hash
        });
    })
};

module.exports = { hashPassword };