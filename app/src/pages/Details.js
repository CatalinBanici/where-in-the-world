import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function Details() {
  const countryDetails = useLoaderData();
  // const { name } = useParams();

  console.log(countryDetails);

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
        <div></div>
      </div>
    </>
  );
}
