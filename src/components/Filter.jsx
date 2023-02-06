import { useState } from "react";
import { useAnime, getNewAnime } from "../context/store.jsx";
import UpSvg from "/caret-up.svg";
import DownSvg from "/caret-down.svg";
import "./filter.css";

function Filter() {

  const filterActive = useAnime((state) => state.filter)
  const [filterArrow, setFilterArrow] = useState(false)

  function getNewSearch(searchOption) {
    if (searchOption === filterActive) return
    useAnime.getState().setFilter(searchOption)
    useAnime.getState().setPlaceholder(`Search ${searchOption.charAt(0).toUpperCase() + searchOption.slice(1)}`)
    useAnime.getState().setSearch("")
    useAnime.getState().setApiOption(searchOption)
    getNewAnime()

  }



  return (
    <div className="mx-2 flex flex-row w-full items-center vsm:flex-col sm:flex-row">
      <p className="font-bold">Search Options </p>
      <div className="w-5 filter-arrow-div lg:hidden sm:hidden">
        <img src={filterArrow ? UpSvg : DownSvg} alt="Up svg" className="w-full filter-arrow-img" onClick={() => setFilterArrow(prev => !prev)} />
      </div>
      <div className={`filter-${filterArrow ? "expand" : "collapse"} flex-1 flex pl-2 pt-2 justify-around vsm:flex-col gap-2 sm:flex-row `}>
        <button className={filterActive === "anime" ? "filter-options-active" : "filter-options"} onClick={() => getNewSearch("anime")}>Anime</button>
        <button className={filterActive === "characters" ? "filter-options-active" : "filter-options"} onClick={() => getNewSearch("characters")}>Characters</button>
        <button className={filterActive === "manga" ? "filter-options-active" : "filter-options"} onClick={() => getNewSearch("manga")}>Manga</button>
        <button className={filterActive === "people" ? "filter-options-active" : "filter-options"} onClick={() => getNewSearch("people")}>Peoples</button>
      </div>
    </div>
  )
}

export default Filter