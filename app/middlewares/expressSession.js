const router = require('express').Router();
const session = require('express-session')
    
router.use(session({
  secret: 'my_secret',
  resave: false,
  saveUninitialized: true
}))

module.exports = router
