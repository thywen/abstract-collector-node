const router = require('express').Router();
const userValidator = require('../validators/userValidator')

const renderLoginForm = (req, res) => {
    res.render("users/login")
}

const renderRegisterForm = (req, res) => {
    res.render("users/registration")
}

const registerUser = (req, res) => {
    const errors = userValidator.validateUserData(req.body)
    console.log(errors)
    if (errors.lengts > 0) {
        res.render('users/register', {
            errors: errors,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConformation: req.body.passwordConformation
        });
    } else {
        res.send('ok');
    }
}

router.get('/registration', renderRegisterForm)
router.get('/login', renderLoginForm)

router.post('/registration', registerUser)

module.exports = router