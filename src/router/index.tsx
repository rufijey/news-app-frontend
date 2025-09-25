import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/UI/Layout.tsx";
import { withSuspense } from "../utils/withSuspense.tsx";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const PrebidLogsPage = lazy(() => import("../pages/PrebidLogsPage.tsx"));

const VITE_MODULES = import.meta.env.VITE_MODULES || "";
const modules = VITE_MODULES.split(",").map((m) => m.trim());

const hasPrebid = modules.includes("prebid");

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
            ...(hasPrebid
                ? [{ path: "/prebid-logs", element: withSuspense(<PrebidLogsPage />) }]
                : []),
        ],
    },
]);
