import { NavLink } from "react-router";
import { cn } from "@/utils/cn";
import { useSidebar } from "@/context/SidebarContext";

/**
 * Sidebar navigation item.
 *
 * Renders a single navigation link with an icon
 * and optional label based on the sidebar state.
 */
const SidebarItem = ({ url, title, icon: Icon }) => {
    const { collapsed } = useSidebar();

    return (
        <li>
            <NavLink
                to={url}
                // Match only the exact dashboard route.
                end={url === "/dashboard"}
                className={({ isActive }) =>
                    cn(
                        "flex items-center rounded-md transition-colors",
                        isActive
                            ? "bg-primary/15 text-primary font-medium"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                        collapsed
                            ? "justify-center h-10 w-10 mx-auto"
                            : "h-10 px-3 gap-2",
                    )
                }>
                <Icon className="size-4 shrink-0" />

                {/* Navigation label */}
                {!collapsed && <span className="text-sm">{title}</span>}
            </NavLink>
        </li>
    );
};

export default SidebarItem;
