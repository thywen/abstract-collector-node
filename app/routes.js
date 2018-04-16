const router = require('express').Router();
const homeRoutes = require('./controllers/homeController')
const abstractRoutes = require('./controllers/abstractsController')
const userRoutes = require('./controllers/userController')
require('./models/Abstract');

const mongoose = require('mongoose');

const Abstract = mongoose.model('abstract');

abstractRoutes.init(Abstract)

router.use(homeRoutes)
router.use('/abstracts', abstractRoutes.router)
router.use('/users', userRoutes)

module.exports = router
