import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index loader={countryLoader} element={<Home />} />
        <Route path="details" element={<Details />} />
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

export default App;
