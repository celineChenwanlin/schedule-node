var express = require("express");
const scheduleFlightController = require("../controller/scheduleFlightController");
const flightInfoController = require("../controller/flightInfoController");
var router = express.Router();

router.get("/getFlight", flightInfoController.getFlight);

module.exports = router;
