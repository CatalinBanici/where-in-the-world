import { useLoaderData, useNavigate } from "react-router-dom";

import BorderButton from "../components/BorderButton";

export default function Details() {
  const countryDetails = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
      <div>
        <div>
          <div>
            <img
              src={countryDetails[0].flags?.png}
              alt={
                countryDetails[0].flags.alt ||
                `Flag of ${countryDetails[0].name.common}`
              }
            />
          </div>
          <div>
            <h2>{countryDetails[0].name?.common}</h2>
            <div>
              <p>
                <strong> Native Names: </strong>
                {Object.values(countryDetails[0].name?.nativeName).map(
                  (item, index) => (
                    <span key={index}>{item.common} </span>
                  )
                )}
              </p>
              <p>
                <strong>Population: </strong>
                {countryDetails[0].population
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
              </p>
              <p>
                <strong>Region: </strong>
                {countryDetails[0].region}
              </p>
              <p>
                <strong>Sub Region: </strong>
                {countryDetails[0].subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {countryDetails[0].capital}
              </p>
              <p>
                <strong>Top Level Domain: </strong>

                {countryDetails[0].tld.map((item) => {
                  return item;
                })}
              </p>
              <p>
                <strong>Currencies: </strong>
                {Object.keys(countryDetails[0].currencies).join(", ")}
              </p>
              <p>
                <strong>Languages: </strong>
                {Object.values(countryDetails[0].languages).join(", ")}
              </p>
            </div>
          </div>
        </div>
        <div>
          <BorderButton countryDetails={countryDetails} />
        </div>
      </div>
    </>
  );
}
