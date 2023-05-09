import React from "react";

export default function Card({ country }) {
  return (
    <>
      <div>
        <img
          src={country.flags.png}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
        />
      </div>
      <div>
        <h3>{country.name.common}</h3>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </>
  );
}
