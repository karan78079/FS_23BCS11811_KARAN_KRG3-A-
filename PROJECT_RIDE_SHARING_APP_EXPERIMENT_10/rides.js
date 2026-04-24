const router = require("express").Router();
const Ride = require("../models/Ride");

router.post("/book", async (req, res) => {
  const ride = await Ride.create(req.body);
  res.json(ride);
});

router.get("/", async (req, res) => {
  const rides = await Ride.find();
  res.json(rides);
});

router.post("/assign/:id", async (req, res) => {
  const ride = await Ride.findByIdAndUpdate(
    req.params.id,
    { status: "accepted", driverId: "driver123" },
    { new: true }
  );
  res.json(ride);
});

module.exports = router;
