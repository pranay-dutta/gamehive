import { Platform } from "@/hooks/usePlatforms";
import Genre from "./Genre";
import Publisher from "./Publisher";

interface Game {
  id: number;
  name: string;
  slug: string;
  genres?: Genre[];
  publishers?: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms?: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export default Game;
