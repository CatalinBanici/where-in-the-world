import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link, useLoaderData } from "react-router-dom";
import Filters from "../components/Filters";

export default function Home() {
  const countries = useLoaderData();
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [filterType, setFilterType] = useState("all");

  // console.log("countries", countries);
  // console.log("filtered countries array", filteredCountries);

  function handleSelectFilters(filterValue) {
    setFilterType(filterValue);
  }

  function handleSearchFilter(inputValue) {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }

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
  }, [filterType, countries]);

  return (
    <>
      <div>
        <Filters
          handleSelectFilters={handleSelectFilters}
          handleSearchFilter={handleSearchFilter}
        />
      </div>
      <div>
        {filteredCountries.map((country, index) => (
          <Link key={index} to={`details/${country.name.common}`}>
            <Card country={country} />
          </Link>
        ))}
      </div>
    </>
  );
}
