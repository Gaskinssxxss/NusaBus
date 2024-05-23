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
    enum: ["Laki-Laki", "Perempuan"],
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
  tipe: {
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
  harga: {
    type: Number,
    required: true,
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

booking.pre("save", function (next) {
  if (this.jenisKelamin === "Laki-Laki") {
    this.jenisKelamin = "Tn";
  } else if (this.jenisKelamin === "Perempuan") {
    this.jenisKelamin = "Ny";
  }
  next();
});

const BookingsData = mongoose.model("BookingsData", booking);
module.exports = BookingsData;
