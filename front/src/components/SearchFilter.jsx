import React, { useState, useEffect } from "react";
import "../styles/SearchFilter.css";

const SearchFilter = ({ onSubmit, resetQuery }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(resetQuery);
  }, [resetQuery]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(query);
    }
  };

  return (
    <form className="containerSearchFilter" onSubmit={handleSubmit}>
      <div className="inputGroup">
        <input
          className="input"
          autoComplete="off"
          required=""
          name="searchInput"
          id="searchInput"
          type="text"
          placeholder="Buscar"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <button
          name="searchInput"
          onClick={handleSubmit}
          className="searchInput"
        >
          <svg
            className="searchInputIcon"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchFilter;
