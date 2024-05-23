const mongoose = require("mongoose");

const generateSeatId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const seatIdLength = 8;
  let seatId = "";

  for (let i = 0; i < seatIdLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    seatId += characters[randomIndex];
  }

  return seatId;
};

const SeatSchema = new mongoose.Schema({
  seatId: {
    type: String,
    required: true,
    default: generateSeatId,
  },
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

const jadwal = new mongoose.Schema({
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
    enum: ["09:00", "14:00", "19:00"],
  },
  waktuBerangkat: {
    type: String,
    required: false,
  },
  plat: {
    type: String,
    required: true,
  },
  tipe: {
    type: String,
    required: true,
  },
  busClass: {
    type: String,
    required: true,
  },
  toilet: {
    type: String,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
    default: 0,
  },
  jadwal: {
    type: Date,
    required: true,
  },
  seats: [SeatSchema],
});

jadwal.pre("save", function (next) {
  switch (this.jamKeberangkatan) {
    case "09:00":
      this.waktuBerangkat = "Pagi";
      break;
    case "14:00":
      this.waktuBerangkat = "Siang";
      break;
    case "19:00":
      this.waktuBerangkat = "Malam";
      break;
    default:
      this.waktuBerangkat = "Tidak Diketahui";
  }
  next();
});

const jadwalDatas = mongoose.model("jadwalDatas", jadwal);
module.exports = jadwalDatas;
