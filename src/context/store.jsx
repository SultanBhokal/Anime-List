import { create } from "zustand";

const filter = localStorage.getItem("filter")
const search = localStorage.getItem("search")

export const useAnime = create((set) => ({
   anime: [],
   allAnime: [],
   setAllAnime: (anime) => set({ allAnime: anime.data, anime: anime.data }),
   search: search === null ? "" : search,
   setSearch: (search) => set({ search }),
   loading: true,
   setLoading: (loading) => set({ loading: loading }),
   placeholder: "Search Anime",
   setPlaceholder: (placeholder) => set({ placeholder }),
   apiOption: filter === null ? "anime" : filter,
   setApiOption: (apiOption) => set({ apiOption }),
   filter: filter === null ? "anime" : filter,
   setFilter: (filter) => set({ filter }),
   options: ["anime", "characters", "people", "manga"]
}))


fetch(`https://api.jikan.moe/v4/${useAnime.getState().apiOption}?q=${useAnime.getState().search}`)
   .then(res => res.json())
   .then((anime) => {
      useAnime.getState().setLoading(false)
      useAnime.getState().setAllAnime(anime)
   })


export const getNewAnime = async () => {

   const search = useAnime.getState().search
   localStorage.setItem("search", search)


   useAnime.getState().setLoading(true)


   const apiOption = useAnime.getState().apiOption
   localStorage.setItem("filter", apiOption)

   const anime = await fetch(`https://api.jikan.moe/v4/${apiOption}?q=${search.toLowerCase()}`).then(res => res.json())

   useAnime.getState().setAllAnime(anime)
   useAnime.getState().setLoading(false)
}
