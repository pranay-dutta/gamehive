// import { Genre } from "@/services/genre-service";
// import useData from "./useData";
import genres from "@/data/genres";

const useGenere = () => ({data: genres, loading: false, error: null})

// const useGenere = () => useData<Genre>("/genres");
export default useGenere;
