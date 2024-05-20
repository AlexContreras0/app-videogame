"use client";

import React, { useState, useEffect } from "react";
import VideogamesList from "@/components/VideogamesList";
import { createVideogame, getAllVideogames } from "../../api/videogameFetch";
import SearchFilter from "@/components/SearchFilter";
import Link from "next/link";
import "../styles/index.css";
import "../styles/colors.css";

export default function Home() {
  const [videogames, setVideogames] = useState([]);
  const [filteredVideogames, setFilteredVideogames] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllVideogames();
        console.log("Data fetched:", response.data);
        setVideogames(response.data);
        setFilteredVideogames(response.data); // Inicializa filteredVideogames con todos los videojuegos
        console.log("Exito al traer los videojuegos");
      } catch (error) {
        console.error("Error fetching videogames:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (query) => {
    try {
      const videogamesResponse = await getAllVideogames();

      if (videogamesResponse.data && Array.isArray(videogamesResponse.data)) {
        const filtered = videogamesResponse.data.filter((videogame) =>
          videogame.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredVideogames(filtered);
      } else {
        console.error(
          "La respuesta de getAllVideogames() no está en el formato esperado."
        );
      }
    } catch (error) {
      console.error("Error al obtener los videojuegos:", error);
    }
  };

  const refreshButton = async () => {
    try {
      const videogamesResponse = await getAllVideogames();
      setFilteredVideogames(videogamesResponse.data);
    } catch (error) {
      console.error("Error al refrescar los videojuegos:", error);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openIcon = (
    <svg width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
      />
    </svg>
  );

  const closeIcon = (
    <svg width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
    </svg>
  );

  return (
    <div className="container">
      <div className="NavBar">
        <button className="toggleButton" onClick={toggleMenu}>
          {menuOpen ? closeIcon : openIcon}
        </button>
        {menuOpen && (
          <div className="menuMobile">
            <Link className="link-confirm" href="/PostVideogame">
              Añadir juego
            </Link>
            <SearchFilter onSubmit={handleSubmit} onRefresh={refreshButton} />
          </div>
        )}

        <div className="menu">
          <Link className="link-confirm" href="/PostVideogame">
            Añadir juego
          </Link>
          <SearchFilter onSubmit={handleSubmit} onRefresh={refreshButton} />
        </div>
      </div>

      <div className="videogameListContainer">
        {filteredVideogames.length > 0 ? (
          filteredVideogames.map((videogame, index) => (
            <div key={index}>
              <VideogamesList key={videogame.id} {...videogame} />
            </div>
          ))
        ) : (
          <p>Cargando videojuegos</p>
        )}
      </div>
    </div>
  );
}
