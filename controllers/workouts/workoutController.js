const pool = require('../../database/db')
const queries = require('../../database/queries')

workoutController = {}

workoutController.getWorkout = (req, res) => {
	pool.query(queries.getWorkout, (error, results) => {
		if (error) throw error
		res.status(200).json(results.rows)
	})
}

workoutController.getWorkoutById = (req, res) => {
	const id = req.params.id
	pool.query(queries.getWorkoutById, [id], (error, results) => {
		if (error) throw error
		res.status(200).json(results.rows)
	})
}

workoutController.addWorkout = (req, res) => {
	const { name, description } = req.body
	pool.query(queries.insertWorkout, [name, description], (error, results) => {
		if (error) throw error
		res.status(201).send('Workout Created')
	})
}

workoutController.updateWorkout = (req, res) => {
	const id = req.params.id
	const { name, description } = req.body
	pool.query(
		queries.updateWorkout,
		[name, description, id],
		(error, results) => {
			if (error) throw error
			res.status(200).send('Workout Updated')
		}
	)
}

workoutController.deleteWorkoutById = (req, res) => {
	const id = req.params.id
	pool.query(queries.deleteWorkoutById, [id], (error, results) => {
		if (error) throw error
		res.status(200).json(results.rows)
	})
}

module.exports = workoutController
