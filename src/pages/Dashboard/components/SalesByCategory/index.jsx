import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/common/Card";
import Button from "@/components/common/Button";
import { MoreHorizontal } from "lucide-react";
import PieChart from "@/components/common/charts/PieChart";
import { categoryData } from "@/data/categoryData";

const colors = [
    "var(--color-chart-1)",
    "var(--color-chart-2)",
    "var(--color-chart-3)",
    "var(--color-chart-4)",
    "var(--color-chart-5)",
];

/**
 * Sales by category chart component.
 *
 * Displays the sales distribution across
 * different product categories using a pie chart.
 */
const SalesByCategory = () => {
    return (
        <Card>
            <CardHeader className="items-end">
                <div>
                    {/* Chart title */}
                    <CardTitle>عملکرد دسته‌بندی‌ها</CardTitle>

                    {/* Additional information about the chart */}
                    <CardDescription className="mt-1">
                        سهم فروش هر دسته‌بندی
                    </CardDescription>
                </div>

                {/* Additional chart actions */}
                <CardAction>
                    {/* More options menu trigger */}
                    <Button variant="ghost" size="icon">
                        <MoreHorizontal size={16} />
                    </Button>
                </CardAction>
            </CardHeader>

            <CardContent>
                {/* Pie chart displaying sales percentage per category */}
                <PieChart data={categoryData} colors={colors} />
            </CardContent>
        </Card>
    );
};

export default SalesByCategory;
