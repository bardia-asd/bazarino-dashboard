import { useSidebar } from "@/context/SidebarContext";
import { PanelLeftOpen, PanelRightOpen, Search } from "lucide-react";
import { cn } from "@/utils/cn";
import Button from "@/components/common/Button";
import Input from "@/components/common/form/Input";

/**
 * Sidebar header component.
 *
 * Displays the application branding and
 * provides a button to collapse or expand the sidebar.
 */
const SidebarHeader = ({ query, onQueryChange }) => {
    const { collapsed, toggleCollapsed } = useSidebar();

    return (
        <div className="relative flex flex-col gap-2 p-2 border-b border-sidebar-border">
            {/* Brand section */}
            <div
                className={cn(
                    "flex items-center py-2",
                    collapsed && "justify-center",
                )}>
                <div className="flex items-center justify-center size-9 bg-primary rounded-full text-primary-foreground font-bold shrink-0">
                    ب
                </div>

                {!collapsed && (
                    <div className="flex-1">
                        <h3 className="text-sm font-medium truncate">
                            بازار پنل
                        </h3>

                        <p className="truncate text-xs text-muted-foreground">
                            پنل مدیریت مرکزی
                        </p>
                    </div>
                )}
            </div>

            {/* Sidebar menu search */}
            {!collapsed && (
                <Input
                    id="sidebar-menu-search"
                    aria-label="Search sidebar menu"
                    startIcon={<Search size={16} />}
                    placeholder="جستجو در منو..."
                    className="text-sm"
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                />
            )}

            {/* Sidebar collapse/expand toggle */}
            <Button
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                size="icon"
                variant="ghost"
                className={cn(
                    "absolute top-4 text-muted-foreground hidden lg:flex",
                    collapsed ? "-left-5" : "left-2",
                )}
                onClick={toggleCollapsed}>
                {collapsed ? (
                    <PanelRightOpen size={18} />
                ) : (
                    <PanelLeftOpen size={18} />
                )}
            </Button>
        </div>
    );
};

export default SidebarHeader;
