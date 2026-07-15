import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useSidebar } from "@/context/SidebarContext";
import { PanelRight } from "lucide-react";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/common/Drawer";
import Button from "@/components/common/Button";
import SidebarHeader from "./SidebarHeader";
import SidebarContent from "./SidebarContent";

/**
 * Mobile sidebar component.
 *
 * Displays the dashboard navigation
 * inside a drawer on smaller screens.
 */
const MobileSidebar = () => {
    const { mobileOpen, setMobileOpen } = useSidebar();
    const [searchQuery, setSearchQuery] = useState("");

    const location = useLocation();

    // Reset the search query and close the drawer
    // whenever the route changes.
    useEffect(() => {
        setSearchQuery("");
        setMobileOpen(false);
    }, [location.pathname]);

    return (
        <Drawer
            direction="right"
            open={mobileOpen}
            onOpenChange={setMobileOpen}>
            {/* Drawer trigger */}
            <DrawerTrigger asChild>
                <Button size="icon" variant="ghost" className="lg:hidden">
                    <PanelRight size={18} />
                </Button>
            </DrawerTrigger>

            {/* Mobile sidebar drawer */}
            <DrawerContent className="w-72 p-0">
                <DrawerHeader>
                    {/* Sidebar branding and search */}
                    <SidebarHeader
                        query={searchQuery}
                        onQueryChange={setSearchQuery}
                    />
                </DrawerHeader>

                {/* Navigation menu */}
                <SidebarContent query={searchQuery} />
            </DrawerContent>
        </Drawer>
    );
};

export default MobileSidebar;
