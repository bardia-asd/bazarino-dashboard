import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/common/Card";
import AreaChart from "@/components/common/charts/AreaChart";
import { customerGrowthData } from "@/data/customerGrowthData";

/**
 * Customer growth chart.
 *
 * Displays customer acquisition and retention trends
 * by comparing new customers and returning customers.
 */
const CustomerGrowth = () => {
    return (
        <Card>
            <CardHeader>
                <div>
                    {/* Chart title */}
                    <CardTitle>رشد مشتریان</CardTitle>

                    {/* Chart description */}
                    <CardDescription>
                        مقایسه مشتریان جدید و بازگشتی در طول زمان
                    </CardDescription>
                </div>
            </CardHeader>

            <CardContent>
                {/* Customer growth area chart */}
                <AreaChart
                    data={customerGrowthData}
                    xKey="month"
                    areas={[
                        {
                            dataKey: "newCustomers",
                            name: "مشتریان جدید",
                            color: "var(--color-primary)",
                        },
                        {
                            dataKey: "returningCustomers",
                            name: "مشتریان بازگشتی",
                            color: "var(--color-success)",
                        },
                    ]}
                />
            </CardContent>
        </Card>
    );
};

export default CustomerGrowth;
