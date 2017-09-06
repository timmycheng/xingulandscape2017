var Photo = require('../models/photo')

exports.upLoad = function(req, res){

}

exports.new = function(req, res){
    res.render('new', {
        title: 'New Item'
    })
}