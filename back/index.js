const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const videogamesRouter = require("./src/routes/videogamesRoute");

const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  "https://videogame-tracker.vercel.app",
  "https://videogame-6cnz33a61-alexs-projects-b75178a5.vercel.app",
  "https://videogame-app-git-main-alexs-projects-b75178a5.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Permitir solicitudes sin origen (como las hechas por el propio servidor)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

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

// "scripts": {
//     "server": "node src/index.js",
//     "client": "cd ../front && npm start",
//     "start": "concurrently \"npm run server\" \"npm run client\"",
//     "build": "npm i"
//   }
