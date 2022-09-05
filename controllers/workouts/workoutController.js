const pool = require('../../database/db')
const queries = require('../../database/queries')

workoutController = {}

workoutController.getWorkout = (req, res) => {}

workoutController.getWorkoutById = (req, res) => {
	const id = req.params.id
}

workoutController.addWorkout = (req, res) => {
	const { name, description } = req.body
}

workoutController.updateWorkout = (req, res) => {
	const id = req.params.id
	const { name, description } = req.body
}

workoutController.deleteWorkoutById = (req, res) => {
	const id = req.params.id
}

module.exports = workoutController
