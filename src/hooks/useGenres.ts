import { Genre } from "@/services/genre-service";
import useData from "./useData";

const useGenere = () => useData<Genre>("/genres");
export default useGenere;
