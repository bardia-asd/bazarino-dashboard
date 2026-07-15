import { SidebarProvider } from "@/context/SidebarContext";
import { Outlet } from "react-router";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

const DashboardLayout = () => {
    return (
        <SidebarProvider>
            <div className="flex w-full min-h-dvh text-foreground bg-background">
                <div className="hidden lg:block">
                    <Sidebar />
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                    <Topbar />
                    <main className="flex-1 min-w-0">
                        <Outlet />
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
};

export default DashboardLayout;
