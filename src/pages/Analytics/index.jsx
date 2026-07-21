import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/common/Button";
import StatGrid from "./components/StatGrid";
import RevenueTrend from "./components/RevenueTrend";
import SalesChannels from "./components/SalesChannels";
import CustomerGrowth from "./components/CustomerGrowth";

/**
 * Analytics page.
 *
 * Provides an overview of business performance
 * using statistics, revenue trends, sales channels,
 * and customer growth insights.
 */
const Analytics = () => {
    return (
        <div className="space-y-5">
            <PageHeader
                title="تحلیل و گزارشات"
                description="بینش عمیق از عملکرد فروش، رفتار مشتری و کانال‌های فروش"
                actions={
                    <>
                        {/* Select analytics date range */}
                        <Button size="sm" radius="full" variant="outline">
                            ۳۰ روز اخیر
                        </Button>

                        {/* Compare current data with previous period */}
                        <Button size="sm" radius="full" variant="outline">
                            مقایسه با دوره قبل
                        </Button>

                        {/* Create custom analytics report */}
                        <Button radius="full" size="sm">
                            ساخت گزارش سفارشی
                        </Button>
                    </>
                }
            />

            {/* Key performance indicators */}
            <StatGrid />

            {/* Revenue performance trend */}
            <RevenueTrend />

            <section>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    {/* Sales distribution by channel */}
                    <SalesChannels />

                    {/* Customer acquisition and retention growth */}
                    <CustomerGrowth />
                </div>
            </section>
        </div>
    );
};

export default Analytics;
