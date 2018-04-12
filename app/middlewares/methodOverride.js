const router = require('express').Router();
const methodOverride = require('method-override')

router.use(methodOverride('_method'))

module.exports = router
