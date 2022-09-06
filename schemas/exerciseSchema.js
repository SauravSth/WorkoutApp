const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
	name: { type: String },
	target: { type: String },
})

module.exports = Exercise = mongoose.model('exercises', exerciseSchema)
