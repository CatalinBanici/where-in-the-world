import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link, useLoaderData } from "react-router-dom";
import Filters from "../components/Filters";

export default function Home({ handleFilters, filterType }) {
  const countries = useLoaderData();
  const [filteredCountries, setFilteredCountries] = useState(countries);

  console.log("countries", countries);
  console.log("filtered countries array", filteredCountries);

  useEffect(() => {
    switch (filterType) {
      case "africa":
        setFilteredCountries(
          countries.filter((country) => country.region === "Africa")
        );
        break;
      case "america":
        setFilteredCountries(
          countries.filter((country) => country.region === "America")
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
    }
  }, [filterType, countries]);

  return (
    <>
      <div>
        <Filters handleFilters={handleFilters} />
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
