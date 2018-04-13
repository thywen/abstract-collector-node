const router = require('express').Router();

router.use(require('./bodyParser'));
router.use(require('./methodOverride'))
router.use(require('./expressSession'))
router.use(require('./connectFlash'))

module.exports = router;
