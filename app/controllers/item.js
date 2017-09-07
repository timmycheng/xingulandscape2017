var Item = require('../models/item')

exports.new = function(req, res){
    res.render('new', {
        title: 'New Item'
    })
}

exports.save = function(req, res){
    var itemObj = req.body.item
    var itemPics = req.files
    console.log(itemObj)
    console.log(itemPics)
    res.send('ok')
}