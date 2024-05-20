import {
  deleteVideogame,
  getVideogameById,
  updateVideogame,
} from "../../api/videogameFetch"; // Importa getVideogameById y updateVideogame
import EditVideogameComponent from "@/components/EditVideogameComponent";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function EditVideogame() {
  const router = useRouter();
  const { id } = router.query;
  const [videogame, setVideogame] = useState(null);

  const loadVideogame = async () => {
    try {
      const response = await getVideogameById(id);
      setVideogame(response.data);
    } catch (error) {
      console.error("Error loading videogame:", error);
    }
  };

  useEffect(() => {
    if (id) {
      loadVideogame();
    }
  }, [id]);

  const handleUpdate = async (updatedData) => {
    try {
      await updateVideogame(id, updatedData);
      await loadVideogame();
    } catch (error) {
      console.error("Error updating videogame:", error);
    }
  };

  const handleDelete = async (videogame) => {
    try {
      await deleteVideogame(id, videogame);
      await loadVideogame();
    } catch (error) {
      console.error("Error updating videogame:", error);
    }
  };

  return (
    <div>
      {videogame ? (
        <EditVideogameComponent
          videogame={videogame}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
