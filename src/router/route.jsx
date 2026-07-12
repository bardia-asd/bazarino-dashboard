import { createBrowserRouter, Navigate } from "react-router";
import { dashboardRoutes } from "./dashboardRoutes";

import DashboardLayout from "@/components/layout/DashboardLayout";
import NotFound from "@/pages/NotFound";

/**
 * Application route configuration.
 *
 * Defines the main routes, redirects,
 * dashboard routes, and fallback pages.
 */
export const routes = createBrowserRouter([
    /**
     * Redirect root path to the dashboard.
     *
     * Keeps the dashboard as the default entry point
     * when users open the application.
     */
    { path: "/", element: <Navigate to="/dashboard" replace /> },

    /**
     * Dashboard route group.
     *
     * Contains all dashboard-related pages
     * and nested routes.
     */
    dashboardRoutes,

    /**
     * Fallback route.
     *
     * Displays the not found page when
     * no route matches the current URL.
     */
    {
        path: "*",
        element: <NotFound />,
    },
]);
