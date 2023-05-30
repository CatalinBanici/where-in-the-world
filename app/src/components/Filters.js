import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

export default function Filters({
  handleSelectFilters,
  handleSearchFilter,
  handleSortFilters,
}) {
  const [searchInput, setSearchInput] = useState("");

  function handleFilterChange(event) {
    handleSelectFilters(event.target.value);
    setSearchInput("");
  }

  function handleSortChange(event) {
    handleSortFilters(event.target.value);
  }

  useEffect(() => {
    handleSearchFilter(searchInput);

    console.log("search filter effect ran");
  }, [searchInput]);

  return (
    <>
      <div className="search-input-container">
        <span>
          <AiOutlineSearch />
        </span>
        <input
          type="search"
          placeholder="Search for a country..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>

      <div className="select-wrapper">
        <div className="select-input-container">
          <select name="countrySorting" onChange={handleSortChange}>
            <option defaultValue="none" hidden>
              Sort by...
            </option>
            <option value="pop+">Population Ascending</option>
            <option value="pop-">Population Descending</option>
            <option value="name+">Name +</option>
            <option value="name-">Name -</option>
            <option value="none">None</option>
          </select>
          <span>
            <AiFillCaretDown />
          </span>
        </div>

        <div className="select-input-container">
          <select name="regionFilters" onChange={handleFilterChange}>
            <option defaultValue="all" hidden>
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
            <option value="all">All</option>
          </select>
          <span>
            <AiFillCaretDown />
          </span>
        </div>
      </div>
    </>
  );
}
