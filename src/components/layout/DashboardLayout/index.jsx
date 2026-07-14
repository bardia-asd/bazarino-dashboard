import { Outlet } from "react-router";
import Sidebar from "../Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

const DashboardLayout = () => {
    return (
        <SidebarProvider>
            <div className="flex w-full min-h-dvh text-foreground bg-background">
                <Sidebar />
                <div className="min-w-0 flex flex-col">
                    <main className="flex-1 min-w-0">
                        <Outlet />
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
};

export default DashboardLayout;
