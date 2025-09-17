import { useNewsStore } from "../../store/NewsStore";
import Modal from "../UI/Modal.tsx";

export default function NewsModal() {
  const selectedNews = useNewsStore((s) => s.selectedNews);
  const setSelectedNews = useNewsStore((s) => s.setSelectedNews);

  return (
    <Modal isOpen={!!selectedNews} onClose={() => setSelectedNews(null)}>
      {selectedNews && (
        <div className="space-y-6">
          {selectedNews.image && (
            <img
              src={selectedNews.image}
              alt="news"
              loading="lazy"
              className="w-full h-40 md:h-80 object-contain rounded"
            />
          )}
          <p className="text-theme text-xl md:text-2xl">{selectedNews.content}</p>
          <p className="text-gray-500 dark:text-gray-300 text-sm">{selectedNews.date}</p>
        </div>
      )}
    </Modal>
  );
}
