import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/common/Button";
import DashboardStatGrid from "./components/DashboardStatGrid";
import SalesOverview from "./components/SalesOverview";
import SalesByCategory from "./components/SalesByCategory";
import LatestOrders from "./components/LatestOrders";
import StockAlert from "./components/StockAlert";
import TopSellingProducts from "./components/TopSellingProducts";
import CampaignPerformance from "./components/CampaignPerformance";

/**
 * Dashboard page component.
 *
 * Provides an overview of the store performance
 * including statistics, sales charts, orders,
 * inventory alerts, products, and campaigns.
 */
const Dashboard = () => {
    return (
        <div className="space-y-5">
            {/* Page title and dashboard actions */}
            <PageHeader
                title="سلام، بردیا"
                description="نمای کلی عملکرد فروشگاه در ۷ روز گذشته"
                actions={
                    <>
                        {/* Date range filter */}
                        <Button size="sm" radius="full" variant="outline">
                            بازه: ۷ روز اخیر
                        </Button>

                        {/* Export dashboard report */}
                        <Button size="sm" radius="full" variant="outline">
                            خروجی گزارش
                        </Button>

                        {/* Create new product action */}
                        <Button radius="full" size="sm">
                            افزودن محصول
                        </Button>
                    </>
                }
            />

            {/* KPI statistics cards */}
            <DashboardStatGrid />

            {/* Sales analytics section */}
            <section>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                    {/* Revenue and order trends */}
                    <SalesOverview />

                    {/* Sales distribution by category */}
                    <SalesByCategory />
                </div>
            </section>

            {/* Orders and inventory section */}
            <section>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                    {/* Recent customer orders */}
                    <LatestOrders />

                    {/* Low stock product alerts */}
                    <StockAlert />
                </div>
            </section>

            {/* Product and marketing section */}
            <section>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                    {/* Best performing products */}
                    <TopSellingProducts />

                    {/* Campaign performance metrics */}
                    <CampaignPerformance />
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
