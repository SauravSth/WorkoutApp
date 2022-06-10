const express = require('express')
const router = express.Router()

const exerciseController = require('../../controllers/exercises/exerciseController')

router.get('/', exerciseController.getExercisePage)
router.get('/getExercise', exerciseController.getExercise)
router.get('/getExercise/:id', exerciseController.getExerciseById)
router.post('/addExercise', exerciseController.addExercise)
router.patch('/updateExercise/:id', exerciseController.updateExercise)
router.delete('/deleteExercise/:id', exerciseController.deleteExerciseById)

module.exports = router
