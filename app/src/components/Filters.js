import React from "react";

export default function Filters({ handleFilters }) {
  function handleFilterChange(event) {
    handleFilters(event.target.value);
  }

  return (
    <>
      <input type="search" />

      <select name="regionFilters" onChange={handleFilterChange}>
        <option value="all" disabled selected hidden>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
        <option value="all">All</option>
      </select>
    </>
  );
}