const express = require("express");
const mongoose = require("mongoose");

const modelData = mongoose.Schema({
  desc: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("enterData", modelData);
