const pool = require('../../database/db')
const queries = require('../../database/queries')

exerciseController = {}

exerciseController.getExercisePage = (req, res) => {
	res.render('exercise')
}

exerciseController.getExercise = (req, res) => {
	pool.query(queries.getExercise, (error, results) => {
		if (error) throw error
		let data = results.rows

		res.render('getExercise', {
			data,
		})
	})
}

exerciseController.getExerciseById = (req, res) => {
	const id = req.params.id
	pool.query(queries.getExerciseById, [id], (error, results) => {
		if (error) throw error
		res.status(200).json(results.rows)
	})
}

exerciseController.addExercise = (req, res) => {
	const { exercise_name, exercise_description, target } = req.body
	pool.query(
		queries.insertExercise,
		[exercise_name, exercise_description, target],
		(error, results) => {
			if (error) throw error
			res.status(201).send('Exercise Created')
		}
	)
}

exerciseController.updateExercise = (req, res) => {
	const id = req.params.id
	const { exercise_name, exercise_description, target } = req.body
	pool.query(
		queries.updateExercise,
		[exercise_name, exercise_description, target, id],
		(error, results) => {
			if (error) throw error
			res.status(200).send('Exercise Updated')
		}
	)
}

exerciseController.deleteExerciseById = (req, res) => {
	const id = req.params.id
	pool.query(queries.deleteExerciseById, [id], (error, results) => {
		if (error) throw error
		res.status(200).json(results.rows)
	})
}

module.exports = exerciseController

// SQL
// CREATE READ UPDATE DELETE
// JOIN
//-> INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN
