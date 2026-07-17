import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/common/Button";
import AreaChart from "../../components/common/charts/AreaChart";

const revenueData = [
    {
        month: "فروردین",
        revenue: 45000000,
        expenses: 18000000,
    },
    {
        month: "اردیبهشت",
        revenue: 52000000,
        expenses: 22000000,
    },
    {
        month: "خرداد",
        revenue: 48000000,
        expenses: 20000000,
    },
    {
        month: "تیر",
        revenue: 61000000,
        expenses: 26000000,
    },
    {
        month: "مرداد",
        revenue: 73000000,
        expenses: 31000000,
    },
    {
        month: "شهریور",
        revenue: 68000000,
        expenses: 29000000,
    },
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

            <AreaChart
                data={revenueData}
                xKey="month"
                areas={[
                    {
                        dataKey: "revenue",
                        name: "درآمد",
                        color: "var(--chart-2)",
                    },
                    {
                        dataKey: "expenses",
                        name: "هزینه",
                        color: "var(--chart-1)",
                    },
                ]}
            />
        </div>
    );
};

export default Dashboard;
