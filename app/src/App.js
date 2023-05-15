import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useState } from "react";

function App() {
  const [filterType, setFilterType] = useState("");

  function handleFilters(filterValue) {
    setFilterType(filterValue);
  }

  console.log(filterType);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route
          index
          loader={countryLoader}
          element={
            <Home handleFilters={handleFilters} filterType={filterType} />
          }
        />
        <Route
          path="/details/:name"
          loader={detailsLoader}
          element={<Details />}
        />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

// Loader functions

export async function countryLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
}

export async function detailsLoader({ params }) {
  const { name } = params;
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  return res.json();
}

export default App;
