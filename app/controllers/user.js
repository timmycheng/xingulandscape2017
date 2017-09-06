var User = require('../models/user')

// exports.showLogin = function(req, res){
//     // res.render('login')
// }

exports.login = function(req, res){
    var _user = req.body.user
	var username = _user.username
	var password = _user.password

	User.findOne({username: username},function(err, user){
		if(err){
			console.log(err)
		}
		if(!user){
			console.log('用户不存在')
            // return res.redirect('/signup')
            return res.redirect('/')
		}
		
		user.comparePassword(password, function(err, isMatch){
			if(err){
				console.log(err)
			}
			if(isMatch){
				req.session.user = user
                console.log('密码匹配')
                // console.log(req.session.user)
				return res.redirect('/')
			}else{
				console.log('密码不匹配')
                // return res.redirect('/signin')
                return res.redirect('/')
				
			}
		})
	})
}