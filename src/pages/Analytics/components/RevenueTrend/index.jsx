import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/common/Card";
import AreaChart from "@/components/common/charts/AreaChart";
import { revenueTrendData } from "@/data/revenueTrendData";

const areas = [
    {
        dataKey: "revenue",
        name: "دوره جاری",
        color: "var(--color-primary)",
    },
    {
        dataKey: "previousRevenue",
        name: "دوره قبل",
        color: "var(--color-muted-foreground)",
    },
];

/**
 * Revenue trend chart.
 *
 * Displays a comparison between the current
 * period revenue and the previous period revenue
 * over a selected time range.
 */
const RevenueTrend = () => {
    return (
        <section>
            <Card>
                <CardHeader>
                    <div>
                        {/* Chart title */}
                        <CardTitle>روند درآمد</CardTitle>

                        {/* Chart description */}
                        <CardDescription>
                            مقایسه ۳۰ روزه با دوره قبل
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent>
                    {/* Revenue comparison area chart */}
                    <AreaChart
                        data={revenueTrendData}
                        xKey="month"
                        areas={areas}
                    />
                </CardContent>
            </Card>
        </section>
    );
};

export default RevenueTrend;
