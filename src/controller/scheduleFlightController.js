const SchduleFlightModal = require("../model/scheduleFlightModel");
const GroundTimeFlightModal = require("../model/groundTimeFlightModal");
const FlightInfoModal = require("../model/flightInfoModel");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const moment = require("moment");

class scheduleFlightController {
  async getFlight(req, res) {
    try {
      const { startTime, endTime, planeId, type } = req.query;
      let flight = [];
      if (type === "Trips") {
        flight = await SchduleFlightModal.aggregate([
          {
            $match: {
              flightId: {
                $in: planeId,
              },
              departureTime: {
                $gte: new Date(startTime),
                $lte: new Date(endTime),
              },
            },
          },
        ]);
      } else {
        flight = await GroundTimeFlightModal.aggregate([
          {
            $match: {
              flightId: {
                $in: planeId,
              },
              arrivalTime: {
                $gte: new Date(startTime),
                $lte: new Date(endTime),
              },
            },
          },
          {
            $project: {
              destination: 1,
              arrivalTime: 1,
              duration: 1,
              flihgtObjId: {
                $convert: {
                  input: "$flightId",
                  to: "objectId",
                },
              },
            },
          },
          {
            $lookup: {
              from: "flights-info",
              localField: "flihgtObjId",
              foreignField: "_id",
              as: "flightInfo",
            },
          },
          {
            $unwind: "$flightInfo",
          },
          {
            $project: {
              destination: 1,
              arrivalTime: 1,
              duration: 1,
              "flightInfo.planeId": 1,
              "flightInfo._id": 1,
            },
          },
        ]);
      }
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
module.exports = new scheduleFlightController();
