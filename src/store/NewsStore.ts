import { create } from "zustand";
import type { NewsItem } from "../services/newsService";

type NewsState = {
  selectedNews: NewsItem | null;
  setSelectedNews: (news: NewsItem | null) => void;
};

export const useNewsStore = create<NewsState>((set) => ({
  selectedNews: null,
  setSelectedNews: (news) => set({ selectedNews: news }),
}));
