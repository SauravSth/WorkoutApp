const express = require('express')
const router = express.Router()

const workoutController = require('../../controllers/indexController')

router.get('/', workoutController.getHome)

module.exports = router
