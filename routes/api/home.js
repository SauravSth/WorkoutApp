const express = require("express");
const router = express.Router();

const homepageController = require("../../controllers/homepage/homepageController");

router.get("/", homepageController.getHome);

module.exports = router;
