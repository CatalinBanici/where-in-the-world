import { Link, useLoaderData, useNavigate } from "react-router-dom";

import BorderButton from "../components/BorderButton";

import { IoIosArrowRoundBack } from "react-icons/io";

export default function Details() {
  const countryDetails = useLoaderData();
  const navigate = useNavigate();

  const nativeName = Object.values(countryDetails[0].name?.nativeName).pop();

  console.log(countryDetails);

  return (
    <div className="details-page">
      <div className="back-button-container">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <span>
            <IoIosArrowRoundBack />
          </span>
          Back
        </button>
      </div>
      <div className="extra-details-container">
        <div className="flag">
          <img
            src={countryDetails[0].flags?.png}
            alt={
              countryDetails[0].flags.alt ||
              `Flag of ${countryDetails[0].name.common}`
            }
          />
        </div>
        <div className="details">
          <h2>{countryDetails[0].name?.common}</h2>
          <div className="details-wrapper">
            <p>
              <strong> Native Names: </strong>
              {Object.values(nativeName?.common)}
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
            <br />
            <p>
              <strong>Top Level Domain: </strong>
              {countryDetails[0].tld?.map((item) => {
                return item;
              }) || "none"}
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
          <div className="google-maps">
            <p>
              View on{" "}
              <Link target="blank" to={countryDetails[0].maps?.googleMaps}>
                Google Maps
              </Link>
            </p>
          </div>
          <div className="border-wrapper">
            <BorderButton countryDetails={countryDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}
