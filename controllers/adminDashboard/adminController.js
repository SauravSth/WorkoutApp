adminController = {}

adminController.getAdminDashboard = (req, res) => {
	res.render('admin')
}

module.exports = adminController
