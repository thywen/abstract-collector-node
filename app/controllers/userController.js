const router = require('express').Router();

const loginUser = (req, res) => {
    res.send("login")
}

const registerUser = (req, res) => {
    res.send("register")
}

router.get('/register', registerUser)
router.get('/login', loginUser)

module.exports = router