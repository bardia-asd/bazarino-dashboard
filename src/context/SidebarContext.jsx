import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

/**
 * Sidebar context.
 *
 * Provides shared sidebar state and actions
 * throughout the dashboard.
 */
const SidebarContext = createContext();

/**
 * Sidebar context provider.
 *
 * Manages the desktop collapsed state and
 * mobile drawer visibility.
 */
const SidebarProvider = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const location = useLocation();

    // Toggle the desktop sidebar.
    const toggleCollapsed = () => setCollapsed((prev) => !prev);

    // Toggle the mobile sidebar.
    const toggleMobile = () => setMobileOpen((prev) => !prev);

    // Open the mobile sidebar.
    const openMobile = () => setMobileOpen(true);

    // Close the mobile sidebar.
    const closeMobile = () => setMobileOpen(false);

    // Automatically close the mobile sidebar after navigation.
    useEffect(() => {
        closeMobile();
    }, [location.pathname]);

    return (
        <SidebarContext.Provider
            value={{
                collapsed,
                mobileOpen,

                toggleCollapsed,
                toggleMobile,

                openMobile,
                closeMobile,
            }}>
            {children}
        </SidebarContext.Provider>
    );
};

/**
 * Sidebar context hook.
 *
 * Provides access to the sidebar state and
 * actions within the SidebarProvider.
 */
const useSidebar = () => {
    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error("useSidebar must be used within SidebarProvider");
    }

    return context;
};

export { SidebarProvider, useSidebar };
