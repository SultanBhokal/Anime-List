import { useAnime } from "../context/store";
import { Link } from "@tanstack/react-location";
import LoadingSpinner from "./LoadingSpinner";
import "./resultlist.css";


const ResultList = () => {
  const anime = useAnime((state) => state.anime);
  const loading = useAnime((state) => state.loading);
  const apiOption = useAnime((state) => state.apiOption);


  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
          {anime &&
            anime.map((p) => (
              <Link key={p?.mal_id} to={`/Anime-List/details/${p?.mal_id}/${apiOption}`}>
                <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                  <div className="flex-1 flex flex-col p-8 card">
                    <article>
                      <figure>
                        <img
                          className="w-32 h-32 flex-shrink-0 mx-auto bg-black"
                          src={`${p?.images?.jpg?.image_url}`}
                          alt="Oopps!"
                        />
                      </figure>
                    </article>
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">
                      {p?.title || p?.name}
                    </h3>
                  </div>
                </li>
              </Link>
            ))}
        </ul>
      )}

      {anime?.length === 0 && loading === false && (
        <div className="w-full h-screen flex justify-center items-center">
          <h3>Not Found</h3>
        </div>
      )}
    </>
  );
};


export default ResultList;