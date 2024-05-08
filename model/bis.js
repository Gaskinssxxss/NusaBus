const mongoose = require("mongoose");

const SeatSchema = new mongoose.Schema({
  numberSeat: {
    type: String,
    unique: false,
  },
  positionSeat: {
    type: String,
    enum: ["left", "xLeft", "mid", "right", "xRight"],
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
  deck: {
    type: String,
    required: false,
  },
});

const bis = new mongoose.Schema({
  busName: {
    type: String,
    required: true,
  },
  keberangkatan: {
    type: String,
    required: false,
    enum: ["lombok", "bima"],
  },
  destinasi: {
    type: String,
    required: false,
    enum: ["lombok", "bima"],
  },
  seats: [SeatSchema],
});

const bisDatas = mongoose.model("bisDatas", bis);
module.exports = bisDatas;
