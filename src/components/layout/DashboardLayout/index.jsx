import { Outlet } from "react-router";

const DashboardLayout = () => {
    return (
        <div className="flex min-h-dvh text-foreground bg-background">
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
