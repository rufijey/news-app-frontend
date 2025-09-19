import { useQuery } from "@tanstack/react-query";
import newsService from "../../services/news.service.ts";
import type {News} from "../../types/news.types.ts";

export function useNews() {
  return useQuery<News[], Error>({
    queryKey: ["news"],
    queryFn: newsService.getNews,
  });
}
