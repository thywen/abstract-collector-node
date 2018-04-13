const router = require('express').Router();

const loginUser = (req, res) => {
    res.render("users/login")
}

const registerUser = (req, res) => {
    res.render("users/registration")
}

router.get('/registration', registerUser)
router.get('/login', loginUser)

module.exports = router