const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlightInfoSchema = new Schema({
  planeId: String,
  aircraftType: String,
});
FlightInfoSchema.index({ id: 1 });

const FlightInfoModal = mongoose.model(
  "FlightsInfo",
  FlightInfoSchema,
  "flights-info"
);

module.exports = FlightInfoModal;
