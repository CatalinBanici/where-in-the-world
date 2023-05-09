import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Axios from "axios";

export default function Details() {
  const [details, setDetails] = useState([]);
  const countryDetails = useLoaderData();
  // const { name } = useParams();

  // console.log(countryDetails);
  // countryDetails[0].borders.map((b, i) => {
  //   console.log(b);
  // });

  const borderString = countryDetails[0].borders.join(",");

  useEffect(() => {
    Axios.get(
      `https://restcountries.com/v3.1/alpha?codes=${borderString}`
    ).then((res) => {
      setDetails(res.data);
    });
  }, [details]);

  // console.log(borderString);
  // console.log(details);
  // details.map((e) => {
  //   console.log(e.name.common);
  // });

  return (
    <>
      <div>
        <button>Back</button>
      </div>
      <div>
        <div>
          <div>
            <img
              src={countryDetails[0].flags.png}
              alt={
                countryDetails[0].flags.alt ||
                `Flag of ${countryDetails[0].name.common}`
              }
            />
          </div>
        </div>
        {details.map((detail, index) => (
          <Link key={index} to={`../details/${detail.name?.common}`}>
            <button>{detail.name?.common}</button>
          </Link>
        ))}
      </div>
    </>
  );
}
