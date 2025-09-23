import { lazy } from "react";
import { useNews } from "../../hooks/news/useNews.ts";
import NewsCard from "./NewsCard.tsx";

const NewsModal = lazy(() => import("./NewsModal"));

export default function NewsList() {
    const { data: news } = useNews();

    return (
        <div className=" p-6 space-y-4 w-3/4 m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {news?.map((item) => (
                    <NewsCard key={item.id} news={item} />
                ))}
            </div>
            <NewsModal />
        </div>
    );
}
