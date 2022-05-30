const workoutController = {}

workoutController.getHome = (req, res) => {
	res.render('index')
}

module.exports = workoutController
