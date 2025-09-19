import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/UI/ThemeProvider.tsx";
import { router } from "./router";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60,
            gcTime: 1000 * 60 * 5
        },
        mutations: {
            retry: false,
        }
    }
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
