const express = require("express");
const router = express.Router();

const home = require("./api/home");
router.use("/", home);

const exercise = require("./api/exercise");
router.use("/exercise", exercise);

module.exports = router;
