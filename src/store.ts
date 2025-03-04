import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genreId, searchText: undefined },
    })),
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId, searchText: undefined },
    })),
  setSortOrder: (sortOrder: string) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder, searchText: undefined },
    })),
}));

if (process.env.NODE_ENV !== "production")
  mountStoreDevtool("GameQueryStore", useGameQueryStore);
export default useGameQueryStore;
