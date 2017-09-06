var mongoose = require('mongoose')
var PhotoSchema = new mongoose.Schema({
    url: String,
    tag1: String,
    location: {
        latitude: Number,
        longitude: Number,
    },
    thumbup: Number,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
})

PhotoSchema.pre('save', function(next){
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now()
	}
	else{
		this.meta.updateAt = Date.now()
	}
	next()
})
// 

module.exports = PhotoSchema