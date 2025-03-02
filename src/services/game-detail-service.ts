import APIClient from "@/services/api-client";
export interface GameDetail {
  id: number;
  name: string;
  description: string;
  description_raw: string;
  rating: number;
}

export default new APIClient<GameDetail>("/games");
