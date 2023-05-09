import React from "react";
import Card from "../components/Card";
import { Link, useLoaderData } from "react-router-dom";

export default function Home() {
  const countries = useLoaderData();
  console.log(countries);

  return (
    <>
      <div>
        <input type="search" />
        <select>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
      <div>
        {countries.map((country, index) => (
          <Link key={index} to={`details/${country.name.common}`}>
            <Card country={country} />
          </Link>
        ))}
      </div>
    </>
  );
}
