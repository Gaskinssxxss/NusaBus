const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  nama: {
    type: String,
    required: true,
    default: "",
  },
  umur: {
    type: Number,
    required: true,
    default: 0,
  },
  jenis_kelamin: {
    type: String,
    required: true,
    enum: ["laki-laki", "perempuan"],
    default: "",
  },
  pekerjaan: {
    type: String,
    required: true,
    default: "",
  },
  pendapatan: {
    type: Number,
    required: true,
    enum: [
      500000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 7500000,
      10000000,
    ],
    default: 0,
  },
  pendidikan_akhir: {
    type: String,
    required: true,
    enum: ["SD", "SMP", "SMA", "D1", "D2", "D3", "D4", "S1", "S2", "S3"],
    default: "",
  },
  status_kawin: {
    type: String,
    required: true,
    enum: ["kawin", "belum kawin"],
    default: "",
  },
  kelurahan: {
    type: String,
    required: true,
    enum: [
      "Penaraga",
      "Rabangodu",
      "Rabadompu",
      "Sadia",
      "Paruga",
      "Kumbe",
      "Dodu",
      "Monggonao",
      "Santi",
    ],
    default: "",
  },
  kecamatan: {
    type: String,
    required: true,
    enum: ["Raba", "Rasanae Barat", "Rasanae Timur", "Mpunda", "Asakota"],
    default: "",
  },
  tipe_pilihan: {
    type: String,
    required: true,
    enum: ["Belum Menentukan", "Sudah Menentukan"],
    default: "",
  },
  calon_dipilih: {
    type: Array,
    required: true,
    enum: ["Arahman-Ryan", "Ferry-Pawan"],
    default: "",
  },
  alasan_memilih: {
    type: String,
    required: true,
    enum: [
      "Hati Nurani",
      "Berkompeten",
      "Berwibawa",
      "Bisa Bekerja",
      "Baik dan Bijak",
      "Punya Pengalaman",
    ],
    default: "",
  },
  alasan_belum_memilih: {
    type: String,
    required: true,
    enum: [
      "Belum ada yang cocok",
      "Visi Misi nya membosankan",
      "Kinerja kurang bagus",
      "Calon nya Pragmatis",
    ],
    default: "",
  },
});

const Survey = mongoose.model("Survey", surveySchema);
module.exports = Survey;
