const { Router } = require("express");
const User = require("../model/user");
const bis = require("../model/bis");
const bookings = require("../model/booking");
const jadwalBus = require("../model/jadwalKeberangkatan");
const jwt = require("jsonwebtoken");
const { SECRET, MAX_AGE } = require("../consts");
const { requireLogin } = require("../middleware/authentication");

const router = Router();

const createJwt = (payload) => {
  return jwt.sign({ payload }, SECRET, { expiresIn: MAX_AGE });
};

router.post("/jadwalbus", async (req, res) => {
  try {
    const {
      busName,
      keberangkatan,
      destinasi,
      jamKeberangkatan,
      plat,
      tipe,
      harga,
      seats,
      jadwal,
    } = req.body;

    const busSchedule = new jadwalBus({
      busName: busName,
      keberangkatan: keberangkatan,
      destinasi: destinasi,
      jamKeberangkatan: jamKeberangkatan,
      plat: plat,
      tipe: tipe,
      harga: harga,
      seats: seats,
      jadwal: jadwal,
    });

    const savedBusSchedule = await busSchedule.save();

    res.status(201).json(savedBusSchedule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/seats", async (req, res) => {
  try {
    const busSchedules = await bis.find();
    res.json(busSchedules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/jadwal", async (req, res) => {
  try {
    const busSchedules = await jadwalBus.find();
    res.json(busSchedules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get /dataSeats is works
router.get("/dataSeats", async (req, res) => {
  try {
    const { numberSeat, positionSeat, deck } = req.body;
    const seats = await bis.findOne({
      "seats.numberSeat": numberSeat,
      "seats.positionSeat": positionSeat,
      "seats.deck": deck,
    });
    return res.status(200).json({ message: "le go", data: seats });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/bookings", async (req, res) => {
  try {
    const bookingDatas = await bookings.find();
    res.json(bookingDatas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/booking", async (req, res) => {
  try {
    console.log(
      `Attempting to book seat: ${req.body.numberSeat} on bus: ${req.body.busName}`
    ); // Log attempt

    // Cek apakah sudah ada booking dengan busName dan numberSeat yang sama
    const existingBooking = await bookings.findOne({
      busName: req.body.busName,
      numberSeat: { $in: req.body.numberSeat },
    });

    if (existingBooking) {
      return res
        .status(409)
        .json({ message: "Seat already booked for this bus" });
    }

    // Jika tidak ada, buat booking baru
    const booking = new bookings({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      jenisKelamin: req.body.jenisKelamin,
      busName: req.body.busName,
      keberangkatan: req.body.keberangkatan,
      jamKeberangkatan: req.body.jamKeberangkatan,
      destinasi: req.body.destinasi,
      numberSeat: req.body.numberSeat,
      deck: req.body.deck,
      Date: new Date(),
    });

    // Simpan booking baru
    await booking.save();

    // Kirim respon sukses
    res.status(201).json({ message: "Booking successful", booking });
  } catch (error) {
    console.error(
      `Error when trying to book seat: ${req.body.numberSeat} on bus: ${req.body.busName}`,
      error
    );
    res
      .status(500)
      .json({ message: "Failed to book seat", error: error.message });
  }
});

// router.post("/booking", async (req, res) => {
//   try {
//     const {
//       name,
//       phone,
//       email,
//       jenisKelamin,
//       busName,
//       keberangkatan,
//       destinasi,
//       jamKeberangkatan,
//       numberSeat,
//       deck,
//     } = req.body;

//     const booking = new bookings({
//       name,
//       phone,
//       email,
//       jenisKelamin,
//       busName,
//       keberangkatan,
//       jamKeberangkatan,
//       destinasi,
//       numberSeat,
//       deck,
//       Date: new Date(),
//     });

//     await booking.save();

//     res.status(201).json({ message: "Booking successful", booking });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to book seat", error: error.message });
//   }
// });

//put /seats/:numberSeat is works
router.put(
  "/seats/:busName/:keberangkatan/:destinasi/:tipe/:numberSeat",
  async (req, res) => {
    try {
      const busName = req.params.busName;
      const keberangkatan = req.params.keberangkatan;
      const destinasi = req.params.destinasi;
      const tipe = req.params.tipe;
      const numberSeat = req.params.numberSeat;

      const bus = await jadwalBus.findOne({
        busName: busName,
        keberangkatan: keberangkatan,
        destinasi: destinasi,
        tipe: tipe,
      });
      if (!bus) return res.status(404).json({ message: "Bus not found" });

      const seat = bus.seats.find((seat) => seat.numberSeat === numberSeat);
      if (!seat) return res.status(404).json({ message: "Seat not found" });

      const { isBooked } = req.body;
      if (isBooked === undefined) {
        if (seat.isBooked) {
          return res.status(400).json({ message: "Seat already booked" });
        }
        seat.isBooked = true;
      } else {
        seat.isBooked = isBooked;
      }

      await bus.save();

      res.json(seat);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
);

router.get("/seathasbook", async (req, res) => {
  try {
    const books = await bookings.find();
    res.json(books);
    console.log(books);
  } catch (error) {
    console.log(error.message);
  }
});

/**
 * @route POST api/users/register
 * @desc Register new user
 * @access Private
 */
router.post("/users/register", (req, res) => {
  const { username, email, password } = req.body;
  User.create({ username, email, password })
    .then(() => {
      return res.status(200).json({ message: "success" });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ message: "failed", error });
    });
});

/**
 * @route POST api/users/login
 * @desc Login user
 * @access Public
 */
router.post("/users/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email, password: password })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: "failed", error: "wrong-credentials" });
      }
      const maxAge = 3 * 24 * 60 * 60;
      const token = createJwt(user._id, maxAge);
      res.cookie("auth", token, { httpOnly: true, maxAge: maxAge * 10 });
      return res.status(200).json({ message: "success", data: user });
    })
    .catch((err) => {
      return res.status(400).json({ message: "failed", err });
    });
});

/**
 * @route POST api/users/logout
 * @desc Log user out
 * @access Public
 */
router.post("/users/logout", (req, res) => {
  res.clearCookie("auth");
  return res.status(200).json({ message: "success" });
});

/**
 * @route GET api/users
 * @desc Get authenticated user
 * @access Private
 */
router.get("/users", requireLogin, (req, res) => {
  const token = req.cookies.auth;
  const _id = jwt.verify(token, SECRET).payload;
  User.findOne({ _id }, { username: 1, email: 1, registrationDate: 1 })
    .then((user) => {
      return res.status(200).json({ message: "success", data: user });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(401)
        .json({ message: "error", code: "unauthenticated-access" });
    });
});

module.exports = router;
