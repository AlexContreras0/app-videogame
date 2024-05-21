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

mongoose.connect(process.env.MONGO_URL);
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
