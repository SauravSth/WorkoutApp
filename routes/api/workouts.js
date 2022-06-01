const express = require('express')
const router = express.Router()

const workoutController = require('../../controllers/workouts/workoutController')

router.get('/getWorkout', workoutController.getWorkout)
router.get('/getWorkout/:id', workoutController.getWorkoutById)
router.post('/addWorkout', workoutController.addWorkout)
router.patch('/updateWorkout/:id', workoutController.updateWorkout)
router.delete('/:id', workoutController.deleteWorkoutById)

module.exports = router
