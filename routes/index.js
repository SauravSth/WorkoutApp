const express = require('express')
const router = express.Router()

const home = require('./api/home')
router.use('/', home)

const adminDashboard = require('./api/adminDashboard')
router.use('/admin', adminDashboard)

const workoutAdmin = require('./api/workouts')
router.use('/admin', workoutAdmin)

module.exports = router
