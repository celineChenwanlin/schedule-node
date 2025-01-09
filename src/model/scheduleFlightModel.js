// import mongoose from "mongoose";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchduleFlightSchema = new Schema({
  flightId: String,
  planeId: String,
  origin: String,
  destination: String,
  departureTime: Date,
  arrivalTime: Date,
});
SchduleFlightSchema.index({ id: 1 });

const SchduleFlightModal = mongoose.model(
  "ScheduleFlights",
  SchduleFlightSchema,
  "schedule-flights"
);

module.exports = SchduleFlightModal;
