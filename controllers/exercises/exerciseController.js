const pool = require('../../database/db')
const queries = require('../../database/queries')

exerciseController = {}

exerciseController.getExercisePage = (req, res) => {
	res.render('exercise')
}

exerciseController.getExercise = (req, res) => {}

exerciseController.getExerciseById = (req, res) => {}

exerciseController.addExercise = (req, res) => {}

exerciseController.updateExercise = (req, res) => {
	const id = req.params.id
}

exerciseController.deleteExerciseById = (req, res) => {
	const id = req.params.id
}

module.exports = exerciseController

// SQL
// CREATE READ UPDATE DELETE
// JOIN
//-> INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN
