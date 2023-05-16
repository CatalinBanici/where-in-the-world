import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function BorderButton({ countryDetails }) {
  const [borderData, setBorderData] = useState([]);

  const borderString = countryDetails[0].borders?.join(",");

  useEffect(() => {
    countryDetails[0].borders &&
      Axios.get(`https://restcountries.com/v3.1/alpha?codes=${borderString}`)
        .then((res) => {
          setBorderData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    console.log("axios border useeffect ran");
  }, [borderString]);

  return (
    <>
      <p>
        <strong>Border Countries: </strong>
      </p>
      <span>
        {borderData.length > 0
          ? borderData.map((item, index) => (
              <Link key={index} to={`../details/${item.name?.common}`}>
                <button>{item.name?.common}</button>
              </Link>
            ))
          : "No Borders"}
      </span>
    </>
  );
}
