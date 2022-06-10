const homepageController = {};

homepageController.getHome = (req, res) => {
	res.render("index");
};

module.exports = homepageController;
