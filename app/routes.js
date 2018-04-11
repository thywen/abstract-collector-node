const router = require('express').Router();
const homeRoutes = require('./controllers/homeController')
const abstractRoutes = require('./controllers/abstractsController')

router.use(homeRoutes)
router.use('/abstracts', abstractRoutes)

module.exports = router