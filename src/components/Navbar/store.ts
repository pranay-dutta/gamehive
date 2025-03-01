import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface SearchInputStore {
  query: string;
  onSearch: (query: string) => void;
}

const useSearchStore = create<SearchInputStore>((set) => ({
  query: "",
  onSearch: (query: string) => set(() => ({ query: query })),
}));

if (process.env.NODE_ENV !== "production")
  mountStoreDevtool("SearchInputStore", useSearchStore);

export default useSearchStore;
