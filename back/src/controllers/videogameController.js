const videogameModel = require("../models/videogameModel");

const getVideogames = async (req, res) => {
  try {
    const allVideogames = await videogameModel.find();
    const resVideogame = allVideogames.map((videogame) => {
      return {
        id: videogame.id,
        name: videogame.name,
        platform: videogame.platform,
        started_at: videogame.started_at,
        finished_at: videogame.finished_at,
        rating: videogame.rating,
        cover: videogame.cover,
        comment: videogame.comment,
        status: videogame.status,
      };
    });
    res.status(200).json({
      status: "Éxito getVideogames",
      data: resVideogame,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fallo getVideogames",
      data: null,
      error: error.message,
    });
  }
};

const getVideogameById = async (req, res) => {
  try {
    const id = req.params.id;
    const videogame = await videogameModel.findById(id);
    res.status(200).json({
      status: "Éxito getVideogameById",
      data: videogame,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fallo getVideogameById",
      data: null,
      error: error.message,
    });
  }
};

const createVideogame = async (req, res) => {
  try {
    const videogameData = req.body;
    const newVideogame = await videogameModel.create(videogameData);

    res.status(200).json({
      status: "Éxito createVideogame",
      data: newVideogame,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fallo createVideogame",
      data: null,
      error: error.message,
    });
  }
};

const updateVideogame = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    const updatedVideogame = await videogameModel.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    if (!updatedVideogame) {
      return res.status(404).json({
        status: "Fallo updateVideogame",
        data: null,
        error: "El videojuego no existe",
      });
    }

    res.status(200).json({
      status: "Éxito updateVideogame",
      data: updatedVideogame,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fallo updateVideogame",
      data: null,
      error: error.message,
    });
  }
};

const deleteVideogame = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedVideogame = await videogameModel.findByIdAndDelete(id);

    if (!deletedVideogame) {
      return res.status(404).json({
        status: "Fallo deleteVideogame",
        data: null,
        error: "El videojuego no existe",
      });
    }

    res.status(200).json({
      status: "Éxito deleteVideogame",
      data: null,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fallo deleteVideogame",
      data: null,
      error: error.message,
    });
  }
};

module.exports = {
  getVideogames,
  getVideogameById,
  createVideogame,
  updateVideogame,
  deleteVideogame,
};
