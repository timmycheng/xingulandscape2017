exports.index = function(req, res){
    res.render('index', {
        title: 'Xingu Landscape'
    })
    // console.log('index')
}

exports.portf = function(req, res){
    // res.render('portf', {
    //     title: 'PROTFOLIO'
    // })
    console.log('portf')
}

exports.flower = function(req, res){
    console.log('flower')
}