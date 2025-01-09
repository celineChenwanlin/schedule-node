var express = require("express");
const scheduleFlightController = require("../controller/scheduleFlightController");

var router = express.Router();

// router.get("/:id", scheduleFlightController.getFlight);
router.get("/getFlight", scheduleFlightController.getFlight);

module.exports = router;
