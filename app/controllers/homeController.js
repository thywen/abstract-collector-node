const router = require('express').Router();

class HomeController {
    static showHome(req, res) {
        res.render('index')
    }

    static showAbout(req, res) {
        res.render('about')
    }
}

router.get('/', HomeController.showHome);
router.get('/about', HomeController.showAbout)

module.exports = router;
