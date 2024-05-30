import React from "react";
import SearchFilter from "@/components/SearchFilter";
import PlatformFilter from "@/components/PlatformFilter";
import StatusFilter from "@/components/StatusFilter";
import RefreshButton from "@/components/RefreshButton";
import Link from "next/link";
import "../styles/navMenu.css";

const NavMenu = ({
  handleSearchSubmit,
  handlePlatformFilterSubmit,
  handleSelectFilterSubmit,
  setVideogames,
  setSearchQuery,
  setSelectedPlatforms,
  setSelectedStatus,
  setResetQuery,
  searchQuery,
  menuOpen,
  toggleMenu,
}) => {
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
    <div className="NavBar">
      <button className="toggleButton" onClick={toggleMenu}>
        {menuOpen ? closeIcon : openIcon}
      </button>
      {menuOpen && (
        <div className="menuMobile">
          <Link className="link-confirm" href="/PostVideogame">
            Añadir juego
            <svg className="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </Link>
          <PlatformFilter onSubmit={handlePlatformFilterSubmit} />
          <StatusFilter onSubmit={handleSelectFilterSubmit} />
          <SearchFilter
            onSubmit={handleSearchSubmit}
            resetQuery={searchQuery}
          />
          <RefreshButton
            setVideogames={setVideogames}
            setSearchQuery={setSearchQuery}
            setSelectedPlatforms={setSelectedPlatforms}
            setSelectedStatus={setSelectedStatus}
            setResetQuery={setResetQuery}
          />
        </div>
      )}

      <div className="menu">
        <Link className="link-confirm" href="/PostVideogame">
          Añadir juego
          <svg className="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </Link>
        <PlatformFilter onSubmit={handlePlatformFilterSubmit} />
        <StatusFilter onSubmit={handleSelectFilterSubmit} />
        <SearchFilter onSubmit={handleSearchSubmit} resetQuery={searchQuery} />
        <RefreshButton
          setVideogames={setVideogames}
          setSearchQuery={setSearchQuery}
          setSelectedPlatforms={setSelectedPlatforms}
          setSelectedStatus={setSelectedStatus}
          setResetQuery={setResetQuery}
        />
      </div>
    </div>
  );
};

export default NavMenu;
