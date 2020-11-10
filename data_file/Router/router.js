const express = require("express");
const mongoose = require("mongoose");
const enterData = require("../Model/model");
const router = express.Router();

router.get("/", async (req, res) => {
  const saveData = await enterData.find();
  res.status(200).json(saveData);
});

router.post("/", async (req, res) => {
  const newData = await enterData.create(req.body);
  res.status(200).json(newData);
});

module.exports = router;
