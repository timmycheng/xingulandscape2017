var Index = require('../controllers/index')
var User = require('../controllers/user')
var Photo = require('../controllers/photo')

module.exports = function(app){
    app.use(function(req, res, next){
        var _user = req.session._user
        app.locals.user = _user
        next()
    })

    app.use(function(req, res, next){
        var date = app.locals.moment(Date.now()).format('hh:mm:ss')
        console.log(date, req.ip, req.method, req.originalUrl)
        next()
    })

    // ROUTES
    app.get('/', Index.index)
    app.get('/portfolio', Index.portf)
    app.get('/flowers/:id', Index.flower)
    // app.get('/login', User.showLogin)
    app.post('/login', User.login)
    app.post('/photo', Photo.upLoad)
    app.get('/photo/new', Photo.new)
}