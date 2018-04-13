const router = require('express').Router();

const loginUser = (req, res) => {
    res.send("login")
}

const registerUser = (req, res) => {
    res.send("registration")
}

router.get('/registration', registerUser)
router.get('/login', loginUser)

module.exports = router