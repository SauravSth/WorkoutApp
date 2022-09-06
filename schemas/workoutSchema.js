const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
	exercise: [{ type: mongoose.Schema.Types.ObjectId, ref: 'exercises' }],
	name: { type: String },
	day: { type: String },
})

module.exports = Workout = mongoose.model('workouts', workoutSchema)
