var Item = require('../models/item')
var COS = require('cos-nodejs-sdk-v5')
var fs = require('fs')

var cos = new COS({
    AppId: '1251622208',
    SecretId: 'AKID4JEDFLKH91pW7gh6proZJySkqmpVZkp2',
    SecretKey: 'mW5BD3iD6xkPa2Y2KXJ0Wq7FBuSnTPDo',
})

exports.new = function(req, res){
    res.render('new', {
        title: 'New Item'
    })
}

exports.save = function(req, res){
    var itemObj = req.body.item
    var itemPics = req.files.pics
    var _item = new Item(itemObj)
    // var _path
    _item.save(function(err, item){
        if(err){
            console.log(err)
        }
        // _path = item._id
        if(typeof(itemPics.length) === 'undefined'){
            cos.putObject({
                Bucket: 'xingu',
                Region: 'ap-shanghai',
                // Key: 'photos/' + _path + '/' + itemPics.originalFilename,
                Key: 'photos/' + itemObj.name + '/' + itemPics.originalFilename,
                ContentLength: itemPics.size,
                Body: fs.createReadStream(itemPics.path),
                // onProgress: function(progressData){
                //     console.log(JSON.stringify(progressData))
                // }
            }, function(err, data){
                console.log(err, data)
                fs.unlinkSync(itemPics.path)
            })
        }else{
            console.log('multiple upload')
            for (var i = 0; i < itemPics.length; i++) {
                var pic = itemPics[i];
                // console.log(pic.originalFilename)
                // console.log(pic.path)
                // console.log(pic.size)
                cos.putObject({
                    Bucket: 'xingu',
                    Region: 'ap-shanghai',
                    // Key: 'photos/' + _path + '/' + pic.originalFilename,
                    Key: 'photos/' + itemObj.name + '/' + pic.originalFilename,
                    ContentLength: pic.size,
                    Body: fs.createReadStream(pic.path),
                    // onProgress: function(progressData){
                    //     console.log(JSON.stringify(progressData))
                    // }
                }, function(err, data){
                    console.log(err, data)
                    try{
                        fs.unlinkSync(pic.path)
                    }catch (err){
                        console.log(err)
                    }
                })
            }
        }
    })
    // console.log(_path)
    // console.log(itemObj)
    // console.log(itemPics.length)
    // console.log(itemPics[0])
    res.redirect('/')
                            
}