import React from "react";
import Card from "../components/Card";

export default function Home() {
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
        <Card />
      </div>
    </>
  );
}
