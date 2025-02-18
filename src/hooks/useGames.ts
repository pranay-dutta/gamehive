import useData from "./useData";
import { Game } from "@/services/game-service";

const useGames = () => useData<Game>("/games");

export default useGames;
