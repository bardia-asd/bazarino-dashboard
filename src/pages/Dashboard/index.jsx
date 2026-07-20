import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/common/Button";
import DashboardStatGrid from "./components/DashboardStatGrid";
import SalesOverview from "./components/SalesOverview";
import SalesByCategory from "./components/SalesByCategory";
import LatestOrders from "./components/LatestOrders";
import StockAlert from "./components/StockAlert";
import TopSellingProducts from "./components/TopSellingProducts";
import BarChart from "../../components/common/charts/BarChart";
import { campaignSpentData } from "../../data/campaignsData";

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
                    <SalesByCategory />
                </div>
            </section>

            <section>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                    <LatestOrders />
                    <StockAlert />
                </div>
            </section>

            <section>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                    <TopSellingProducts />
                    <BarChart
                        data={campaignSpentData}
                        xKey="name"
                        bars={[
                            {
                                dataKey: "spent",
                                name: "هزینه تبلیغات",
                                color: "var(--color-primary)",
                            },
                        ]}
                        showYAxis={false}
                        height="100%"
                    />
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
