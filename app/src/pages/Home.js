import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link, useLoaderData } from "react-router-dom";
import Filters from "../components/Filters";

export default function Home() {
  const countries = useLoaderData();
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [filterType, setFilterType] = useState("all");

  const [sortType, setSortType] = useState("none");
  // const [sortedCountries, setSortedCountries] = useState(filteredCountries);

  // let popToSort = filteredCountries.map((e) => e.population);
  // popToSort.sort((a, b) => {
  //   return a - b;
  // });
  // console.log(popToSort);

  // console.log("countries", countries);
  // console.log("filtered countries array", filteredCountries);

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

  useEffect(() => {
    // const popToSort = filteredCountries.map((e) => e);

    switch (sortType) {
      case "pop+":
        setFilteredCountries(
          filteredCountries.sort((a, b) => {
            return a.population - b.population;
          })
        );
        break;
      case "pop-":
        setFilteredCountries(
          filteredCountries.sort((a, b) => {
            return b.population - a.population;
          })
        );
        break;

      // case "name+":
      //   setFilteredCountries(

      //   );
      //   break;
      // case "name-":
      //   setFilteredCountries(filteredCountries.sort());
      //   break;
      default:
        setFilteredCountries(countries);
    }

    console.log("sort effect ran");
  }, [sortType]);

  // console.log("sortedCountries is", sortedCountries);
  console.log(filteredCountries);

  useEffect(() => {
    switch (filterType) {
      case "africa":
        setFilteredCountries(
          countries.filter((country) => country.region === "Africa")
        );
        break;
      case "america":
        setFilteredCountries(
          countries.filter((country) => country.region === "Americas")
        );
        break;
      case "asia":
        setFilteredCountries(
          countries.filter((country) => country.region === "Asia")
        );
        break;
      case "europe":
        setFilteredCountries(
          countries.filter((country) => country.region === "Europe")
        );
        break;
      case "oceania":
        setFilteredCountries(
          countries.filter((country) => country.region === "Oceania")
        );
        break;
      default:
        setFilteredCountries(countries);
    }
    console.log("useeffect filters ran");
  }, [filterType]);

  return (
    <>
      <div className="filter-container">
        <Filters
          handleSelectFilters={handleSelectFilters}
          handleSearchFilter={handleSearchFilter}
          handleSortFilters={handleSortFilters}
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
