var Index = require('../controllers/index')

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
}