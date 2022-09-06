const exerciseSchema = require('../../schemas/exerciseSchema')

exerciseController = {}

exerciseController.getExercisePage = (req, res) => {
	res.render('exercise')
}

exerciseController.getExercise = (req, res) => {}

exerciseController.getExerciseById = (req, res) => {}

exerciseController.addExercise = async (req, res) => {
	const exercise = req.body

	if (exercise) {
		const newExercise = new exerciseSchema(exercise)
		const exerciseSave = await newExercise.save()

		res.send(exerciseSave)
	}
}

exerciseController.updateExercise = (req, res) => {
	const id = req.params.id
}

exerciseController.deleteExerciseById = (req, res) => {
	const id = req.params.id
}

module.exports = exerciseController
