import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/common/Button";
import StatGrid from "./components/StatGrid";
import RevenueTrend from "./components/RevenueTrend";
import SalesChannels from "./components/SalesChannels";

const Analytics = () => {
    return (
        <div className="space-y-5">
            <PageHeader
                title="تحلیل و گزارشات"
                description="بینش عمیق از عملکرد فروش، رفتار مشتری و کانال‌های فروش"
                actions={
                    <>
                        <Button size="sm" radius="full" variant="outline">
                            ۳۰ روز اخیر
                        </Button>

                        {/* Export dashboard report */}
                        <Button size="sm" radius="full" variant="outline">
                            مقایسه با دوره قبل
                        </Button>

                        {/* Create new product action */}
                        <Button radius="full" size="sm">
                            ساخت گزارش سفارشی
                        </Button>
                    </>
                }
            />

            <StatGrid />

            <RevenueTrend />

            <section>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    <SalesChannels />
                </div>
            </section>
        </div>
    );
};

export default Analytics;
