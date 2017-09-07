var Photo = require('../models/photo')

exports.upLoad = function(req, res){
    var photoObj = req.files
    console.log(photoObj)
}

exports.new = function(req, res){
    res.render('new', {
        title: 'New Item'
    })
}