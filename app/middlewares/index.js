const router = require('express').Router();

router.use(require('./bodyParser'));
router.use(require('./methodOverride'))

module.exports = router;
