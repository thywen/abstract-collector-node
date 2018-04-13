const router = require('express').Router();
const flash = require('connect-flash')

router.use(flash())

router.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

module.exports = router