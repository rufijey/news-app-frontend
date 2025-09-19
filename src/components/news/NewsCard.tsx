
import { useNewsStore } from "../../store/NewsStore";
import type {News} from "../../types/news.types.ts";

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {
  const setSelectedNews = useNewsStore((s) => s.setSelectedNews);

  return (
    <button
      type="button"
      className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition text-left"
      onClick={() => setSelectedNews(news)}
    >
      {news.image && (
        <div className="w-full h-32 sm:h-40 md:h-48 bg-white dark:bg-gray-700 rounded mb-2 flex items-center justify-center">
          <img
            src={news.image}
            alt="news"
            loading="lazy"
            className="max-w-full max-h-full object-contain rounded"
          />
        </div>
      )}
      <p className="text-theme text-lg">{news.shortContent}</p>
    </button>
  );
}
