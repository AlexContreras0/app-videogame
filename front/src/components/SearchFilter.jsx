// SearchFilter.jsx
import React, { useState } from "react";

const SearchFilter = ({ onSubmit, onRefresh }) => {
  const [query, setQuery] = useState("");

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
    }
  };

  const handleRefresh = () => {
    const vacio = "";
    setQuery(vacio);
    onRefresh();
  };

  return (
    <form className="input-group" onChange={handleSubmit}>
      <input
        className="input"
        autoComplete="off"
        required=""
        name="searchInput"
        id="searchInput"
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <label className="user-label" id="searchInput">
        Buscar
      </label>
      <button className="refresh-button" type="button" onClick={handleRefresh}>
        <svg className="refresh-button-icon" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
        </svg>
      </button>
    </form>
  );
};

export default SearchFilter;
