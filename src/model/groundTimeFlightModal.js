// import mongoose from "mongoose";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroundTimeFlightSchema = new Schema({
  flightId: String,
  destination: String,
  arrivalTime: Date,
  duration: Number,
});
GroundTimeFlightSchema.index({ id: 1 });

const GroundTimeFlightModal = mongoose.model(
  "groundTtimeFflight",
  GroundTimeFlightSchema,
  "ground-time-flight"
);

module.exports = GroundTimeFlightModal;
