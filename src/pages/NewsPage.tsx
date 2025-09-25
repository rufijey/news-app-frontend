import AdSlot from "../components/UI/AdSlot.tsx";
import NewsList from "../components/news/NewsList.tsx";

export default function NewsPage() {
    return (
        <div className="flex flex-grow gap-4 p-6">
            <div className="flex-none">
                <AdSlot code="ad-frame" />
            </div>

            <main className="flex-grow">
                <NewsList />
            </main>

            <div className="flex-none">
                <AdSlot code="ad-frame1" />
            </div>
        </div>
    );
}
