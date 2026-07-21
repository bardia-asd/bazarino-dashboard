import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/common/Button";
import StatGrid from "./components/StatGrid";
import RevenueTrend from "./components/RevenueTrend";

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
        </div>
    );
};

export default Analytics;
