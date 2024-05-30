"use client";

import React, { useState, useEffect } from "react";
import VideogamesList from "@/components/VideogamesList";
import { getAllVideogames } from "../../api/videogameFetch";
import NavMenu from "@/components/NavMenu";
import "../styles/index.css";
import "../styles/colors.css";

export default function Home() {
  const [videogames, setVideogames] = useState([]);
  const [filteredVideogames, setFilteredVideogames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [resetQuery, setResetQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllVideogames();
        setVideogames(response.data);
        setFilteredVideogames(response.data);
      } catch (error) {
        console.error("Error fetching videogames:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    filterVideogames();
  }, [searchQuery, selectedPlatforms, selectedStatus, videogames]);

  const filterVideogames = () => {
    let filtered = videogames;

    if (searchQuery) {
      filtered = filtered.filter((videogame) =>
        videogame.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedPlatforms !== null && selectedPlatforms.length > 0) {
      filtered = filtered.filter((videogame) =>
        selectedPlatforms.includes(videogame.platform)
      );
    }

    if (selectedStatus !== null && selectedStatus.length > 0) {
      filtered = filtered.filter((videogame) =>
        selectedStatus.includes(videogame.status)
      );
    }

    setFilteredVideogames(filtered);
  };

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  const handlePlatformFilterSubmit = (platforms) => {
    setSelectedPlatforms(platforms);
  };

  const handleSelectFilterSubmit = (status) => {
    setSelectedStatus(status);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <NavMenu
        handleSearchSubmit={handleSearchSubmit}
        handlePlatformFilterSubmit={handlePlatformFilterSubmit}
        handleSelectFilterSubmit={handleSelectFilterSubmit}
        setSelectedPlatforms={setSelectedPlatforms}
        setSelectedStatus={setSelectedStatus}
        setVideogames={setVideogames}
        setSearchQuery={setSearchQuery}
        setResetQuery={setResetQuery}
        searchQuery={searchQuery}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      />
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
