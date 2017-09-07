var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var ItemSchema = new mongoose.Schema({
    name: String,
    comment: String,
    cate: String,
    photos: {
        type: ObjectId,
        ref: 'Photo',
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

ItemSchema.pre('save', function(next){
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now()
	}
	else{
		this.meta.updateAt = Date.now()
	}
	next()
})
// 

module.exports = ItemSchema