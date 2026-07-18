import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/common/Button";
import DashboardStatGrid from "./components/DashboardStatGrid";
import SalesOverview from "./components/SalesOverview";
import PieChart from "@/components/common/charts/PieChart";
import { categoryData } from "../../data/categoryData";

const colors = [
    "var(--color-chart-1)",
    "var(--color-chart-2)",
    "var(--color-chart-3)",
    "var(--color-chart-4)",
    "var(--color-chart-5)",
];

const Dashboard = () => {
    return (
        <div className="space-y-5">
            <PageHeader
                title="سلام، بردیا"
                description="نمای کلی عملکرد فروشگاه در ۷ روز گذشته"
                actions={
                    <>
                        <Button size="sm" radius="full" variant="outline">
                            بازه: ۷ روز اخیر
                        </Button>
                        <Button size="sm" radius="full" variant="outline">
                            خروجی گزارش
                        </Button>
                        <Button radius="full" size="sm">
                            افزودن محصول
                        </Button>
                    </>
                }
            />

            <DashboardStatGrid />

            <section>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                    <SalesOverview />
                    <PieChart data={categoryData} colors={colors} />
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
