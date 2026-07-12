import DashboardLayout from "@/components/layout/DashboardLayout";

import Dashboard from "@/pages/Dashboard";
import Analytics from "@/pages/Analytics";

import Products from "@/pages/Products";
import Categories from "@/pages/Categories";
import Brands from "@/pages/Brands";
import Orders from "@/pages/Orders";
import Customers from "@/pages/Customers";
import Inventory from "@/pages/Inventory";
import Sellers from "@/pages/Sellers";

import Discounts from "@/pages/Discounts";
import Campaigns from "@/pages/Campaigns";
import Coupons from "@/pages/Coupons";
import Marketing from "@/pages/Marketing";

import Notifications from "@/pages/Notifications";
import Messages from "@/pages/Messages";
import Reviews from "@/pages/Reviews";
import Returns from "@/pages/Returns";

import Transactions from "@/pages/Transactions";
import Finance from "@/pages/Finance";

import Settings from "@/pages/Settings";
import Users from "@/pages/Users";
import Roles from "@/pages/Roles";
import System from "@/pages/System";
import Errors from "@/pages/Errors";
import Logs from "@/pages/Logs";

/**
 * Dashboard route configuration.
 *
 * Defines all protected dashboard pages and their
 * nested routes under the dashboard layout.
 */
export const dashboardRoutes = {
    /**
     * Dashboard layout route.
     *
     * All child routes share the same layout,
     * including sidebar, header, and dashboard structure.
     */
    path: "/dashboard",
    element: <DashboardLayout />,

    handle: {
        breadcrumb: "داشبورد",
    },

    children: [
        {
            index: true,
            element: <Dashboard />,
        },

        // Analytics
        {
            path: "analytics",
            element: <Analytics />,
            handle: {
                breadcrumb: "تحلیل و گزارشات",
            },
        },

        // Catalog management
        {
            path: "products",
            element: <Products />,
            handle: {
                breadcrumb: "محصولات",
            },
        },
        {
            path: "categories",
            element: <Categories />,
            handle: {
                breadcrumb: "دسته‌بندی‌ها",
            },
        },
        {
            path: "brands",
            element: <Brands />,
            handle: {
                breadcrumb: "برندها",
            },
        },

        // Order and customer management
        {
            path: "orders",
            element: <Orders />,
            handle: {
                breadcrumb: "سفارش‌ها",
            },
        },
        {
            path: "customers",
            element: <Customers />,
            handle: {
                breadcrumb: "مشتریان",
            },
        },
        {
            path: "inventory",
            element: <Inventory />,
            handle: {
                breadcrumb: "انبار",
            },
        },
        {
            path: "sellers",
            element: <Sellers />,
            handle: {
                breadcrumb: "فروشندگان",
            },
        },

        // Marketing management
        {
            path: "discounts",
            element: <Discounts />,
            handle: {
                breadcrumb: "تخفیف‌ها",
            },
        },
        {
            path: "campaigns",
            element: <Campaigns />,
            handle: {
                breadcrumb: "کمپین‌ها",
            },
        },
        {
            path: "coupons",
            element: <Coupons />,
            handle: {
                breadcrumb: "کوپن‌ها",
            },
        },
        {
            path: "marketing",
            element: <Marketing />,
            handle: {
                breadcrumb: "بازاریابی",
            },
        },

        // Customer interaction
        {
            path: "notifications",
            element: <Notifications />,
            handle: {
                breadcrumb: "اعلان‌ها",
            },
        },
        {
            path: "messages",
            element: <Messages />,
            handle: {
                breadcrumb: "پیام‌ها",
            },
        },
        {
            path: "reviews",
            element: <Reviews />,
            handle: {
                breadcrumb: "دیدگاه‌ها",
            },
        },
        {
            path: "returns",
            element: <Returns />,
            handle: {
                breadcrumb: "بازگشت کالا",
            },
        },

        // Finance management
        {
            path: "transactions",
            element: <Transactions />,
            handle: {
                breadcrumb: "تراکنش‌ها",
            },
        },
        {
            path: "finance",
            element: <Finance />,
            handle: {
                breadcrumb: "مالی",
            },
        },

        // System administration
        {
            path: "settings",
            element: <Settings />,
            handle: {
                breadcrumb: "تنظیمات",
            },
        },
        {
            path: "users",
            element: <Users />,
            handle: {
                breadcrumb: "کاربران",
            },
        },
        {
            path: "roles",
            element: <Roles />,
            handle: {
                breadcrumb: "نقش‌ها و دسترسی‌ها",
            },
        },
        {
            path: "system",
            element: <System />,
            handle: {
                breadcrumb: "سیستم",
            },
        },
        {
            path: "errors",
            element: <Errors />,
            handle: {
                breadcrumb: "گزارش خطاها",
            },
        },
        {
            path: "logs",
            element: <Logs />,
            handle: {
                breadcrumb: "لاگ فعالیت‌ها",
            },
        },
    ],
};
