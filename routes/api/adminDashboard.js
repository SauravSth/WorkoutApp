const express = require('express')
const router = express.Router()

const adminController = require('../../controllers/adminDashboard/adminController')

router.get('/', adminController.getAdminDashboard)

module.exports = router
