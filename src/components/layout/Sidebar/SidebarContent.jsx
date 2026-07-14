import { useSidebar } from "@/context/SidebarContext";
import { sidebarData } from "@/data/sidebarData";
import SidebarItem from "./SidebarItem";

/**
 * Sidebar content component.
 *
 * Renders the sidebar navigation and filters
 * menu items based on the search query.
 */
const SidebarContent = ({ query }) => {
    const { collapsed } = useSidebar();

    // Filter sidebar groups and items based on the search query.
    const filteredSidebarData =
        query === ""
            ? sidebarData
            : sidebarData
                  .map((group) => ({
                      ...group,
                      items: group.items.filter((item) =>
                          item.title.includes(query),
                      ),
                  }))
                  .filter((group) => group.items.length > 0);

    return (
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-border">
            {filteredSidebarData.map(({ label, items }) => (
                <div key={label} className="flex flex-col p-2">
                    {/* Navigation group label */}
                    {!collapsed && (
                        <h5 className="text-xs font-medium text-muted-foreground px-2 py-1.5">
                            {label}
                        </h5>
                    )}

                    {/* Navigation items */}
                    <ul className="flex flex-col gap-1">
                        {items.map((item) => (
                            <SidebarItem
                                key={item.url}
                                url={item.url}
                                title={item.title}
                                icon={item.icon}
                            />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default SidebarContent;
