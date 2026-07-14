import {
    LayoutDashboard,
    LineChart,
    Package,
    Layers,
    Tag,
    ShoppingCart,
    Users,
    Warehouse,
    Store,
    Percent,
    Megaphone,
    Ticket,
    Radio,
    Bell,
    MessageSquare,
    Star,
    Undo2,
    Receipt,
    Wallet,
    Settings,
    UserCog,
    ShieldCheck,
    Cog,
    AlertTriangle,
    Activity,
    Search,
    ChevronsLeftRight,
} from "lucide-react";

export const sidebarData = [
    {
        label: "کلی",
        items: [
            { title: "داشبورد", url: "/dashboard", icon: LayoutDashboard },
            { title: "تحلیل و گزارشات", url: "analytics", icon: LineChart },
        ],
    },
    {
        label: "فروشگاه",
        items: [
            {
                title: "محصولات",
                url: "products",
                icon: Package,
            },
            { title: "دسته‌بندی‌ها", url: "categories", icon: Layers },
            { title: "برندها", url: "brands", icon: Tag },
            {
                title: "سفارش‌ها",
                url: "orders",
                icon: ShoppingCart,
            },
            { title: "مشتریان", url: "customers", icon: Users },
            { title: "انبار", url: "inventory", icon: Warehouse },
            { title: "فروشندگان", url: "sellers", icon: Store },
        ],
    },
    {
        label: "بازاریابی",
        items: [
            { title: "تخفیف‌ها", url: "discounts", icon: Percent },
            { title: "کمپین‌ها", url: "campaigns", icon: Megaphone },
            { title: "کوپن‌ها", url: "coupons", icon: Ticket },
            { title: "بازاریابی", url: "marketing", icon: Radio },
        ],
    },
    {
        label: "ارتباطات",
        items: [
            {
                title: "اعلان‌ها",
                url: "notifications",
                icon: Bell,
            },
            { title: "پیام‌ها", url: "messages", icon: MessageSquare },
            { title: "دیدگاه‌ها", url: "reviews", icon: Star },
            { title: "بازگشت کالا", url: "returns", icon: Undo2 },
        ],
    },
    {
        label: "مالی",
        items: [
            { title: "تراکنش‌ها", url: "transactions", icon: Receipt },
            { title: "مالی", url: "finance", icon: Wallet },
        ],
    },
    {
        label: "تنظیمات",
        items: [
            { title: "تنظیمات", url: "settings", icon: Settings },
            { title: "کاربران", url: "users", icon: UserCog },
            { title: "نقش‌ها و دسترسی‌ها", url: "roles", icon: ShieldCheck },
            { title: "سیستم", url: "system", icon: Cog },
            { title: "گزارش خطاها", url: "errors", icon: AlertTriangle },
            { title: "لاگ فعالیت‌ها", url: "logs", icon: Activity },
        ],
    },
];
