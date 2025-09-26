import { useQuery } from "@tanstack/react-query";
import newsService from "../../services/news.service.ts";
import type { Article } from "../../types/news.types.ts";

export function useArticle(link: string | null) {
    return useQuery<Article, Error>({
        queryKey: ["article", link],
        queryFn: () => {
            if (!link) {
                return Promise.reject(new Error("No link provided"));
            }
            return newsService.getArticle(link);
        },
        enabled: !!link,
    });
}
