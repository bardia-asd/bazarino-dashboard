import { Link } from "react-router";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/common/Card";
import Button from "@/components/common/Button";
import BarChart from "@/components/common/charts/BarChart";
import { campaignSpentData } from "@/data/campaignsData";

/**
 * Campaign performance component.
 *
 * Displays advertising campaign spending data
 * using a bar chart with navigation actions.
 */
const CampaignPerformance = () => {
    return (
        <Card>
            <CardHeader className="items-end">
                {/* Chart heading and description */}
                <div>
                    <CardTitle>عملکرد کمپین‌ها</CardTitle>

                    <CardDescription className="mt-1">
                        بازگشت سرمایه و نرخ تبدیل
                    </CardDescription>
                </div>

                {/* Navigate to campaign management */}
                <CardAction>
                    <Button as={Link} to="analytics" variant="ghost" size="sm">
                        مدیریت
                    </Button>
                </CardAction>
            </CardHeader>

            <CardContent>
                {/* Campaign spending visualization */}
                <BarChart
                    data={campaignSpentData}
                    xKey="name"
                    bars={[
                        {
                            dataKey: "spent",
                            name: "هزینه تبلیغات",
                            color: "var(--color-primary)",
                        },
                    ]}
                    showYAxis={false}
                    height={300}
                />
            </CardContent>
        </Card>
    );
};

export default CampaignPerformance;
