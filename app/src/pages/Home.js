import React from "react";
import Card from "../components/Card";
import { Link, useLoaderData } from "react-router-dom";
import Filters from "../components/Filters";

export default function Home() {
  const countries = useLoaderData();
  // console.log(countries);

  return (
    <>
      <div>
        <Filters />
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
