const mongoose = require("mongoose");

const RideSchema = new mongoose.Schema({
  userId: String,
  pickup: String,
  destination: String,
  status: { type: String, default: "pending" },
  driverId: String
});

module.exports = mongoose.model("Ride", RideSchema);
