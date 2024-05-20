export const getAllVideogames = async () => {
  try {
    const response = await fetch("http://localhost:3001/videogames");
    const videogames = await response.json();
    return videogames;
  } catch (error) {
    console.error("Error fetching all videogames:", error);
    throw error;
  }
};

export const getVideogameById = async (id) => {
  try {
    const response = await fetch("http://localhost:3001/videogames/" + id);
    const videogame = await response.json();
    return videogame;
  } catch (error) {
    console.error(`Error fetching videogame with id ${id}:`, error);
    throw error;
  }
};

export const createVideogame = async (bodyParam) => {
  try {
    const response = await fetch("http://localhost:3001/videogames/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyParam),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating videogame:", error);
    throw error;
  }
};

export const deleteVideogame = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/videogames/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("Deleted:", data);
    return data;
  } catch (error) {
    console.error(`Error deleting videogame with id ${id}:`, error);
    throw error;
  }
};

export const updateVideogame = async (id, bodyParam) => {
  try {
    const response = await fetch(`http://localhost:3001/videogames/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyParam),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error updating videogame with id ${id}:`, error);
    throw error;
  }
};
