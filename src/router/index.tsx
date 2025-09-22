import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/UI/Layout.tsx";
import { withSuspense } from "../utils/withSuspense.tsx";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: withSuspense(<NewsPage />),
            },
            {
                path: "/login",
                element: withSuspense(<LoginPage />),
            },
            {
                path: "/register",
                element: withSuspense(<RegisterPage />),
            },
        ],
    },
]);
