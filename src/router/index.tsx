import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/UI/Layout.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import NewsPage from "../pages/NewsPage.tsx";
import RegisterPage from "../pages/RegisterPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <NewsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);
