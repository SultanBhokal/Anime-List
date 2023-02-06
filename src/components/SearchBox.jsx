import { useAnime, getNewAnime } from "../context/store";



function SearchBox() {
  const search = useAnime((state) => state.search);
  const setSearch = useAnime((state) => state.setSearch);
  const placeholder = useAnime((state) => state.placeholder);

  return (
    <div
      className="flex"
      style={{
        position: "relative",
      }}
    >
      <input
        className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? getNewAnime() : "")}
      />
      <button
        style={{
          position: "absolute",
          right: "15px",
          top: "20px",
          cursor: "pointer",
        }}
        onClick={getNewAnime}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBox;