import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorComponent />}>
        <Route index loader={countryLoader} element={<Home />} />
        <Route
          path="/details/:name"
          loader={detailsLoader}
          element={<Details />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

// Loader functions

export async function countryLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) {
    throw Error("Could not get data");
  }
  return res.json();
}

export async function detailsLoader({ params }) {
  const { name } = params;
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  if (!res.ok) {
    throw Error("Could not get data from that country");
  }
  return res.json();
}

export default App;
