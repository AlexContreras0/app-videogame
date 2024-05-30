import React, { useState } from "react";
import Select from "react-select";
import "../styles/platformFilter.css";
import "../styles/colors.css";

const PlatformFilter = ({ onSubmit }) => {
  const options = [
    { value: "PC", label: "PC" },
    { value: "PS5", label: "PS5" },
    { value: "Nintendo Switch", label: "Nintendo Switch" },
    { value: "Mobile", label: "Mobile" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onSubmit(selectedOption ? [selectedOption.value] : []);
  };

  const colorStyles = {
    placeholder: (base) => ({
      ...base,
      color: "#323232",
    }),
    control: (base, { isFocused }) => ({
      ...base,
      border: "none",
      backgroundColor: isFocused ? "none" : "none",
      boxShadow: isFocused ? "none" : "none",
    }),
    input: (base) => ({
      ...base,
      grid: "none",
      border: "none",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "white",
      color: "#323232",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#ff204e"
        : state.isFocused
          ? "transparent"
          : null,
      color: state.isSelected ? "white" : "#323232",
      "&:hover": {
        backgroundColor: state.isSelected ? "#ff204e" : "#e6e6e6",
        color: state.isSelected ? "white" : "#323232",
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#323232",
    }),
    selectContainer: (base) => ({
      ...base,
      border: "none",
      outline: "none",
    }),
  };

  return (
    <div className="platformContainer">
      <Select
        instanceId="my-platform"
        className="platformButton"
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isSearchable={false}
        placeholder="Plataforma"
        styles={colorStyles}
      />
    </div>
  );
};

export default PlatformFilter;
