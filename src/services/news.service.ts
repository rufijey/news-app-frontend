import type { Article, News } from "../types/news.types.ts";

const API_URL = import.meta.env.VITE_API_URL;

const newsService = {
    async getNews(): Promise<News[]> {
        const res = await fetch(`${API_URL}/feed`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch feed");
        }

        const data = await res.json();
        return data.news;
    },

    async getArticle(link: string): Promise<Article> {
        const res = await fetch(`${API_URL}/article?url=${link}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch article");
        }

        return res.json();
    },
};

export default newsService;
