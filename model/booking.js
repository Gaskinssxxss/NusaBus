const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booking = new Schema({
  name: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  jenisKelamin: {
    type: String,
    required: true,
  },
  busName: {
    type: String,
    required: true,
  },
  keberangkatan: {
    type: String,
    required: true,
  },
  destinasi: {
    type: String,
    required: true,
  },
  jamKeberangkatan: {
    type: String,
    required: true,
  },
  numberSeat: {
    type: [],
    required: true,
    unique: false,
  },
  deck: {
    type: String,
    required: false,
  },
  Date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

booking.index(
  {
    busName: 1,
    keberangkatan: 1,
    destinasi: 1,
    jamKeberangkatan: 1,
    numberSeat: 1,
  },
  { unique: true }
);

const BookingsData = mongoose.model("BookingsData", booking);
module.exports = BookingsData;
