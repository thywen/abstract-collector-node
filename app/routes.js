const router = require('express').Router();
const homeRoutes = require('./controllers/homeController')
const abstractRoutes = require('./controllers/abstractsController')
const userRoutes = require('./controllers/userController')

router.use(homeRoutes)
router.use('/abstracts', abstractRoutes)
router.use('/users', userRoutes)

module.exports = router
