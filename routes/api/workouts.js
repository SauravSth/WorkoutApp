const express = require('express')
const router = express.Router()

const workoutController = require('../../controllers/workouts/workoutController')

router.get('/', workoutController.getWorkout)

module.exports = router
