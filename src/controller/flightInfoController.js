const FlightInfoModal = require("../model/flightInfoModel");
const mongoose = require("mongoose");
class flightInfoController {
  async getFlight(req, res) {
    try {
      const flight = await FlightInfoModal.find({});
      if (flight) {
        const result = {
          statusCode: 200,
          data: flight,
        };
        res.send(result);
      } else {
        res.status(404).json({ error: "Plane not found" });
      }
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
module.exports = new flightInfoController();
