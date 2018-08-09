const router = require('express').Router();
const userValidator = require('../validators/userValidator');
const userDao = require('../dao/userDao')

const renderLoginForm = (req, res) => {
    res.render('users/login');
};

const renderRegisterForm = (req, res) => {
    res.render('users/registration');
};

const registerUser = (req, res) => {
    const errors = userValidator.validateUserData(req.body);
    if (errors.length > 0) {
        res.render('users/registration', {
            errors,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConformation: req.body.passwordConformation
        });
    } else {
        let newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };
        if (userDao.saveNewUser(newUser)) {
            req.flash('success_msg', 'User Added')
            res.redirect('login')
        }
    }
};

router.get('/registration', renderRegisterForm);
router.get('/login', renderLoginForm);

router.post('/registration', registerUser);

module.exports = router;