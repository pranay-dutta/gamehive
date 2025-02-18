import create from "./http-service";

interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export type { Genre };
export default create("/genres");
