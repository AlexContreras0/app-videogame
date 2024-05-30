import React from "react";
import { getAllVideogames } from "../../api/videogameFetch";
import "../styles/refreshButton.css";
import "../styles/colors.css";

export default function RefreshButton({
  setVideogames,
  setSearchQuery,
  setSelectedPlatforms,
  setResetQuery,
  setSelectedStatus,
}) {
  const handleRefresh = async () => {
    try {
      const videogamesResponse = await getAllVideogames();
      setVideogames(videogamesResponse.data);
      setSearchQuery("");
      setSelectedPlatforms([]);
      setSelectedStatus([]);
      setResetQuery("");
    } catch (error) {
      console.error("Error al refrescar los videojuegos:", error);
    }
  };

  return (
    <div>
      <button className="refreshButton" type="button" onClick={handleRefresh}>
        Eliminar filtros
      </button>
    </div>
  );
}
