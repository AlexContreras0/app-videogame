const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const videogamesRouter = require("./routes/videogamesRoute");

const app = express();

const PORT = 3001;

dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/videogames", videogamesRouter);

const url_mongo =
  "mongodb+srv://alexcontrerasg98:a91PkD122AM2nUb2@app-videojuegos.g07vsyt.mongodb.net/?retryWrites=true&w=majority&appName=app-videojuegos";

mongoose.connect(url_mongo);
const db = mongoose.connection;

db.on("error", (error) => {
  console.log(`Error al conectar con mongo ${error}`);
});

db.on("connected", () => {
  console.log(`Success connect`);
});

db.on("disconnected", () => {
  console.log(`Mongo is disconected`);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
