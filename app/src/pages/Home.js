import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link, useLoaderData } from "react-router-dom";
import Filters from "../components/Filters";

export default function Home() {
  const countries = useLoaderData();
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [filterType, setFilterType] = useState("all");
  const [sortType, setSortType] = useState("none");

  function handleSelectFilters(filterValue) {
    setFilterType(filterValue);
  }

  function handleSortFilters(sortValue) {
    setSortType(sortValue);
  }

  function handleSearchFilter(inputValue) {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }

  function handleSorting() {
    const filteredCountriesObj = [...filteredCountries];

    switch (sortType) {
      case "pop+":
        setFilteredCountries(
          filteredCountriesObj.sort((a, b) => {
            return a.population - b.population;
          })
        );
        break;
      case "pop-":
        setFilteredCountries(
          filteredCountriesObj.sort((a, b) => {
            return b.population - a.population;
          })
        );
        break;

      case "name+":
        setFilteredCountries(
          filteredCountriesObj.sort((a, b) => {
            if (a.name.common.toLowerCase() < b.name.common.toLowerCase()) {
              return -1;
            }
            return null;
          })
        );
        break;
      case "name-":
        setFilteredCountries(
          filteredCountriesObj.sort((a, b) => {
            if (a.name.common.toLowerCase() > b.name.common.toLowerCase()) {
              return -1;
            }
            return null;
          })
        );
        break;

      default:
        setFilteredCountries(countries);
    }
  }

  function handleRegionFilters() {
    const countryObj = [...countries];

    switch (filterType) {
      case "africa":
        setFilteredCountries(
          countryObj.filter((country) => country.region === "Africa")
        );
        break;
      case "america":
        setFilteredCountries(
          countryObj.filter((country) => country.region === "Americas")
        );
        break;
      case "asia":
        setFilteredCountries(
          countryObj.filter((country) => country.region === "Asia")
        );
        break;
      case "europe":
        setFilteredCountries(
          countryObj.filter((country) => country.region === "Europe")
        );
        break;
      case "oceania":
        setFilteredCountries(
          countryObj.filter((country) => country.region === "Oceania")
        );
        break;
      default:
        setFilteredCountries(countries);
    }
  }

  useEffect(() => {
    handleSorting();
    console.log("sort effect ran");
  }, [sortType]);

  useEffect(() => {
    handleRegionFilters();
    console.log("filters effect ran");
  }, [filterType]);

  return (
    <>
      <div className="filter-container">
        <Filters
          handleSelectFilters={handleSelectFilters}
          handleSearchFilter={handleSearchFilter}
          handleSortFilters={handleSortFilters}
          filteredCountries={filteredCountries}
        />
      </div>
      <div className="card-container">
        {filteredCountries.map((country, index) => (
          <Link
            className="link-card"
            title="Click to view more details"
            key={index}
            to={`details/${country.name.common}`}
          >
            <Card country={country} />
          </Link>
        ))}
      </div>
    </>
  );
}
