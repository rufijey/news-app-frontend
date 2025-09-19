import { create } from "zustand";
import type { News } from "../services/news.service.ts";

type NewsState = {
  selectedNews: News | null;
  setSelectedNews: (news: News | null) => void;
};

export const useNewsStore = create<NewsState>((set) => ({
  selectedNews: null,
  setSelectedNews: (news) => set({ selectedNews: news }),
}));
