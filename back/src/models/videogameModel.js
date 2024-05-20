const mongoose = require("mongoose");

const videogameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
    enum: ["PC", "Nintendo Switch", "PS5", "Mobile"],
  },
  cover: {
    type: String,
    required: true,
  },
  started_at: {
    type: Date,
    required: true,
  },
  finished_at: {
    type: Date,
    required: false,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  comment: {
    type: String,
    required: true,
    maxlength: 500,
  },
  status: {
    type: String,
    required: true,
    enum: ["Finalizado", "En proceso", "Por jugar"],
  },
});

const Videogame = mongoose.model("Videogame", videogameSchema);

module.exports = Videogame;
