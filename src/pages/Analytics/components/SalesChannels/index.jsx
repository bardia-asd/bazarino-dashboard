import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/common/Card";
import BarChart from "@/components/common/charts/BarChart";
import { salesChannelsData } from "@/data/salesChannelsData";

/**
 * Sales channels chart.
 *
 * Displays the distribution of orders across
 * different sales channels using a bar chart.
 */
const SalesChannels = () => {
    return (
        <Card>
            <CardHeader>
                <div>
                    {/* Chart title */}
                    <CardTitle>کانال‌های فروش</CardTitle>

                    {/* Chart description */}
                    <CardDescription>سهم هر کانال از سفارش‌ها</CardDescription>
                </div>
            </CardHeader>

            <CardContent>
                {/* Sales channel performance chart */}
                <BarChart
                    data={salesChannelsData}
                    xKey="name"
                    bars={[
                        {
                            dataKey: "value",
                            name: "فروش",
                            color: "var(--color-primary)",
                        },
                    ]}
                />
            </CardContent>
        </Card>
    );
};

export default SalesChannels;
