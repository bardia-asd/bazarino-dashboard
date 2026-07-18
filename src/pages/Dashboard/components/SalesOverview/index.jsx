import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/common/Card";
import Button from "@/components/common/Button";
import AreaChart from "@/components/common/charts/AreaChart";
import { salesOrderData } from "@/data/salesOrderData";

/**
 * Area chart configuration.
 *
 * Defines the data series displayed in the sales overview chart.
 *
 * Each area contains:
 * - dataKey: key used to read values from chart data
 * - name: label displayed in tooltip and legend
 * - color: chart line and gradient color
 */
const areas = [
    {
        dataKey: "revenue",
        name: "درآمد",
        color: "var(--color-primary)",
    },
    {
        dataKey: "orders",
        name: "سفارش‌ها",
        color: "var(--color-info)",
    },
];

/**
 * Sales overview component.
 *
 * Displays sales performance trends using an area chart.
 *
 * Shows:
 * - Revenue trend
 * - Order count trend
 * - Time range filters (week/month/year)
 *
 * Used as a dashboard analytics card.
 */
const SalesOverview = () => {
    return (
        <Card className="xl:col-span-2">
            <CardHeader className="items-end">
                <div>
                    {/* Chart title */}
                    <CardTitle>روند فروش و سفارش‌ها</CardTitle>

                    {/* Chart description */}
                    <CardDescription className="mt-1">
                        مقایسه درآمد و تعداد سفارش‌ها در هفته جاری
                    </CardDescription>
                </div>

                {/* Time range filter actions */}
                <CardAction>
                    {/* Active filter */}
                    <Button variant="secondary" size="sm">
                        هفته
                    </Button>

                    <Button variant="ghost" size="sm">
                        ماه
                    </Button>

                    <Button variant="ghost" size="sm">
                        سال
                    </Button>
                </CardAction>
            </CardHeader>

            <CardContent>
                {/* Sales and orders trend chart */}
                <AreaChart
                    data={salesOrderData}
                    // Field used for X-axis labels
                    xKey="day"
                    // Data series configuration
                    areas={areas}
                    // Custom chart spacing
                    margin={{
                        top: 20,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                />
            </CardContent>
        </Card>
    );
};

export default SalesOverview;
