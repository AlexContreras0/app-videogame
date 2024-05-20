const {
  getVideogames,
  getVideogameById,
  createVideogame,
  updateVideogame,
  deleteVideogame,
} = require("../controllers/videogameController");

const videogameRouter = require("express").Router();

videogameRouter.get("/", getVideogames);
videogameRouter.post("/", createVideogame);
videogameRouter.get("/:id", getVideogameById);
videogameRouter.put("/:id", updateVideogame);
videogameRouter.delete("/:id", deleteVideogame);

module.exports = videogameRouter;
