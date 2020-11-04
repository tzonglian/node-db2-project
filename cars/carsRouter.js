const express = require("express");
const db = require("../data/db-config.js");
const router = express.Router();

module.exports = router;

router.get("/", (req, res) => {
  db("cars")
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve cars." });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then((ids) => {
      db("cars")
        .where({ id: ids[0] })
        .then((newcarEntry) => {
          res.status(201).json(newcarEntry);
        });
    })
    .catch((err) => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});
