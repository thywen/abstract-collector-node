const validateUserData = (user) => {
    var errors = []
    if (user.password != user.passwordConfirmation) {
        errors.push({text: 'The passwords don\'t match'});
    }

    if (user.password.length < 8) {
        errors.push({text: 'The passwords needs at least 8 characters'});
    }
    return errors
}

module.exports = {
    validateUserData
};
