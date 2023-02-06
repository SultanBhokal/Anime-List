import { Link, useMatch } from "@tanstack/react-location";
import { useAnime } from "../context/store";
import BackArrow from "/arrow-left-solid.svg";
import yt from "/yt.svg";
import LoadingSpinner from "./LoadingSpinner";


function Details() {
  const {
    params: { id, fid },
  } = useMatch();

  

  const selectedDetails = useAnime((state) => state.anime).find(
    (a) => a?.mal_id === +id
  );

  if (useAnime((state) => state.options).includes(fid) === false) {
    window.location = "/Anime-List/";
  }

  const loading = useAnime((state) => state.loading);
  if (loading === false) {
    selectedDetails === undefined && dId === ""(
      window.location = "/Anime-List/"
    )
  }
  console.log(selectedDetails)

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        selectedDetails !== undefined && (
          <div className="mt-2">
            <Link to={"/Anime-List/"}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <img src={BackArrow} className="w-5 invert" />
              </button>
            </Link>
            <div className="my-5 mx-5 lg:grid grid-cols-2">
              <div className="w-full flex justify-center">
                <a href={selectedDetails?.url} target="_blank">
                  <img
                    src={
                      selectedDetails?.images?.jpg?.large_image_url ||
                      selectedDetails?.images?.jpg?.image_url
                    }
                  />
                </a>
              </div>

              <div className="ml-3 my-5">
                <h2 className="text-2xl font-bold">
                  {selectedDetails?.title || selectedDetails?.name}
                </h2>
                <div className="mt-3">
                  <ul className="mt-1">
                    {[
                      "name_kanji",
                      "members",
                      "popularity",
                      "rank",
                      "rating",
                      "score",
                      "scored_by",
                      "favorites",
                      "title_japanese",
                      "chapters",
                      "status",
                      "volumes",
                      "family_name",
                      "given_name"
                    ].map(
                      (stat) =>
                        stat in selectedDetails && (
                          <li key={stat} className="grid grid-cols-2">
                            <span className="font-bold mb-3">
                              {stat.charAt(0).toUpperCase() +
                                stat.slice(1).replace("_", " ")}
                            </span>
                            <span>
                              {selectedDetails[stat]
                                ? selectedDetails[stat]
                                : "N/A"}
                            </span>
                          </li>
                        )
                    )}
                    {"nicknames" in selectedDetails && (
                      <li className="grid grid-cols-2">
                        <span className="font-bold mb3">Nicknames</span>
                        <span>
                          {selectedDetails?.nicknames?.length !== 0
                            ? selectedDetails.nicknames
                            : "Not any"}
                        </span>
                      </li>
                    )}
                    {"broadcast" in selectedDetails && selectedDetails?.broadcast?.string !== null && (
                      <>
                        <li className="grid grid-cols-2">
                          <span className="font-bold mb-3">Broadcast</span>
                          <span>{selectedDetails?.broadcast?.string}</span>
                        </li>
                        <li className="grid grid-cols-2">
                          <span className="font-bold mb-3">Time Zone</span>
                          <span>
                            {selectedDetails?.broadcast?.timezone ||
                              "Asia/Tokyo"}
                          </span>
                        </li>
                      </>
                    )}
                    {"airing" in selectedDetails && (
                      <li className="grid grid-cols-2">
                        <span className="font-bold mb-3">Airing</span>
                        <span>
                          {selectedDetails?.airing === false
                            ? "Currently no airing"
                            : selectedDetails?.airing}
                        </span>
                      </li>
                    )}
                    {"authors" in selectedDetails &&
                      selectedDetails?.authors?.length !== 0 && (
                        <>
                          <li className="grid grid-cols-2">
                            <span className="font-bold mb-3">
                              Author Details
                            </span>
                            <span className="mt-1">
                              {selectedDetails?.authors[0]?.name}
                              <a
                                href={selectedDetails?.authors[0]?.url}
                                target="_blank"
                              >
                                <span className="underline text-pink-400 background-transparent font-bold px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                  more
                                </span>
                              </a>
                            </span>
                          </li>
                        </>
                      )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="m-5 flex flex-col items-center mb-5">
              <h3 className="text-xl font-bold mb-3 break-words">
                {"synopsis" in selectedDetails ? "Synopsis" : "About"}
              </h3>
              <p className="text-justify">
                {selectedDetails?.synopsis || selectedDetails?.about}
              </p>
            </div>

            {selectedDetails?.background &&
              selectedDetails?.background !== null && (
                <div className="m-5 flex flex-col items-center mb-5">
                  <h3 className="text-xl font-bold mb-3 break-words">
                    Background
                  </h3>
                  <p className="text-justify">{selectedDetails.background}</p>
                </div>
              )}

            {selectedDetails?.trailer?.url !== null && (
              <div className="flex justify-center">
                <div className="relative m-5">
                  <img
                    src={selectedDetails?.trailer?.images?.small_image_url}
                  />
                  <a href={selectedDetails?.trailer?.url} target="_target">
                    <img
                      src={yt}
                      className="h-16 w-16 object-cover absolute top-2/4 left-2/4 right-2/4 bottom-2/4"
                    />
                  </a>
                </div>
              </div>
            )}
          </div>
        )
      )}
    </>

  );

}

export default Details;
