import { useQuery } from "@tanstack/react-query";
import newsService, { type NewsItem } from "../../services/newsService.ts";

export function useNews() {
  return useQuery<NewsItem[], Error>({
    queryKey: ["news"],
    queryFn: newsService.getNews,
  });
}
