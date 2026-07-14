import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/utils/cn";
import SidebarHeader from "./SidebarHeader";
import SidebarContent from "./SidebarContent";

/**
 * Desktop sidebar component.
 *
 * Combines the sidebar header and navigation content,
 * while managing the sidebar search state.
 */
const Sidebar = () => {
    const { collapsed } = useSidebar();
    const [searchQuery, setSearchQuery] = useState("");

    const location = useLocation();

    // Clear the search query after navigating to a new page.
    useEffect(() => {
        setSearchQuery("");
    }, [location.pathname]);

    return (
        <aside
            className={cn(
                "sticky top-0 right-0 z-10 h-dvh shrink-0 border-l border-sidebar-border bg-sidebar text-sidebar-foreground shadow-md transition-[width] duration-300 flex flex-col",
                collapsed ? "w-20" : "w-70",
            )}>
            {/* Sidebar header */}
            <SidebarHeader query={searchQuery} onQueryChange={setSearchQuery} />

            {/* Sidebar navigation */}
            <SidebarContent query={searchQuery} />
        </aside>
    );
};

export default Sidebar;
