import {
  Outlet,
  ReactLocation,
  Router
} from "@tanstack/react-location";
import SearchBox from "./components/SearchBox";
import Filter from "./components/Filter";
import ResultList from "./components/ResultList";
import Details from "./components/Details";

const location = new ReactLocation();





const routes = [
  {
    path: "/Anime-List/",
    element: (
      <>
        <SearchBox />
        <Filter />
        <ResultList />
      </>
    ),
  },
  {
    path: "/Anime-List/details/:id/:fid",
    element: (
      <>
        <Details />
      </>
    ),
  },
];

function App() {
  return (
    <Router location={location} routes={routes}>
      <div className="mx-auto max-w-3xl">
        <Outlet />
      </div>
    </Router>
  );
}

export default App;
