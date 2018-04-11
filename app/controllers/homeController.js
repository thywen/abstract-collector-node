class HomeController {
    static showHome(req, res) {
        res.render('index')
    }

    static showAbout(req, res) {
        res.render('about')
    }
}

module.exports.controller = function(app) {
    app.get('/', HomeController.showHome)
    app.get('/about', HomeController.showAbout)
}