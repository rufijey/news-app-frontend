import { CircularProgress } from "@mui/material";
import { useArticle } from "../../hooks/news/useArticle.ts";
import { useNewsStore } from "../../store/news.store.ts";
import Modal from "../UI/Modal.tsx";

export default function NewsModal() {
    const selectedNews = useNewsStore((s) => s.selectedNews);
    const setSelectedNews = useNewsStore((s) => s.setSelectedNews);

    const { data: article, isLoading, error } = useArticle(selectedNews?.link ?? null);

    return (
        <Modal isOpen={!!selectedNews} onClose={() => setSelectedNews(null)}>
            {isLoading && (
                <div className="flex items-center justify-center h-40">
                    <CircularProgress size={48} />
                </div>
            )}
            {error && <p className="text-red-500">Failed to load article</p>}

            {article && (
                <div className="space-y-6">
                    {article.image && (
                        <img
                            src={article.image}
                            alt="news"
                            loading="lazy"
                            className="w-full max-h-[500px] object-contain rounded"
                        />
                    )}
                    <h2 className="text-theme text-2xl font-bold">{article.title}</h2>
                    <p className="text-theme text-lg md:text-xl">{article.text}</p>
                </div>
            )}
        </Modal>
    );
}
