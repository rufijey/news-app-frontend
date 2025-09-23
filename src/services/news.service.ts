import type { News } from "../types/news.types.ts";

const newsData: News[] = [
    {
        id: "1",
        image: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg",
        shortContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        date: "2025-09-16",
    },
    {
        id: "2",
        image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=200",
        shortContent:
            "Consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam...",
        content:
            "Consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. " +
            "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. " +
            "Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
        date: "2025-09-15",
    },
    {
        id: "3",
        image: "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_incoming&w=740&q=80",
        shortContent: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        content:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "2025-09-14",
    },
];

const newsService = {
    async getNews(): Promise<News[]> {
        return newsData;
    },
};

export default newsService;
