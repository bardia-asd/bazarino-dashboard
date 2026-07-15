import { Bell, MessageSquare } from "lucide-react";
import StoreSwitcher from "./StoreSwitcher";
import GlobalSearch from "./GlobalSearch";
import QuickActions from "./QuickActions";
import UserMenu from "./UserMenu";
import ThemeSwitcher from "./ThemeSwitcher";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import MobileSidebar from "../Sidebar/MobileSidebar";

/**
 * Topbar component.
 *
 * Displays the main dashboard header containing
 * store switching, global search, quick actions,
 * notifications, theme switching, and user menu.
 */
const Topbar = () => {
    return (
        <header className="sticky top-0 z-20 flex items-center gap-2 lg:gap-3 px-3 h-16 border-b border-border bg-surface/90">
            {/* Mobile navigation drawer */}
            <MobileSidebar />

            {/* Mobile-only divider */}
            <div className="w-px h-6 bg-border lg:hidden" />

            {/* Active store selector */}
            <StoreSwitcher />

            {/* Global search */}
            <div className="flex-1 flex justify-end sm:justify-center max-w-xl sm:mx-auto">
                <GlobalSearch />
            </div>

            {/* Quick create actions */}
            <QuickActions />

            {/* Header utility actions */}
            <div className="flex items-center gap-1">
                {/* Messages */}
                <Button
                    size="icon"
                    variant="ghost"
                    radius="lg"
                    className="hidden sm:inline-flex"
                    aria-label="پیام‌ها">
                    <MessageSquare size={16} />

                    {/* Unread message indicator */}
                    <span className="absolute top-1.5 left-1.5 size-1.5 rounded-full bg-primary" />
                </Button>

                {/* Notifications */}
                <Button
                    size="icon"
                    variant="ghost"
                    radius="lg"
                    className="hidden sm:inline-flex"
                    aria-label="اعلان‌ها">
                    <Bell size={16} />

                    {/* Notification count */}
                    <Badge className="absolute -top-0.5 -left-0.5 size-4 p-0.5 rounded-full bg-primary text-primary-foreground text-[9px]">
                        {Number(5).toLocaleString("fa-IR")}
                    </Badge>
                </Button>

                {/* Theme switcher */}
                <ThemeSwitcher />
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-border" />

            {/* User account menu */}
            <UserMenu />
        </header>
    );
};

export default Topbar;
