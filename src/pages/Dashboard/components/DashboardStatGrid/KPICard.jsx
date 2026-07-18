import { TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import AreaChart from "@/components/common/charts/AreaChart";
import { formatNumberFa, formatValue } from "@/utils/formatter";
import { cn } from "@/utils/cn";

/**
 * Color configuration map for KPI cards.
 *
 * Defines reusable Tailwind classes and CSS variables
 * for different semantic states.
 *
 * Each color provides:
 * - text: icon/text color
 * - bg: icon background color
 * - stroke: chart line color
 */
const colorMap = {
    primary: {
        text: "text-primary",
        bg: "bg-primary/10",
        stroke: "var(--color-primary)",
    },
    info: {
        text: "text-info",
        bg: "bg-info/10",
        stroke: "var(--color-info)",
    },
    success: {
        text: "text-success",
        bg: "bg-success/10",
        stroke: "var(--color-success)",
    },
    warning: {
        text: "text-warning",
        bg: "bg-warning/10",
        stroke: "var(--color-warning)",
    },
    danger: {
        text: "text-danger",
        bg: "bg-danger/10",
        stroke: "var(--color-danger)",
    },
};

/**
 * KPI Card component.
 *
 * Displays a dashboard metric with:
 * - Title and formatted value
 * - Optional unit
 * - Growth/decline percentage indicator
 * - Comparison text
 * - Icon with semantic color
 * - Optional mini area chart
 *
 * Used for displaying important dashboard statistics.
 */
const KPICard = ({
    title,
    value,
    unit,
    delta,
    compare,
    icon: Icon,
    color = "primary",
    chart,
}) => {
    // Determines whether the metric increased or decreased.
    const positive = delta >= 0;

    // Get color configuration based on selected variant.
    const c = colorMap[color];

    // Format value based on provided unit.
    const formatted = formatValue(value, unit);

    return (
        <Card className="p-4">
            <CardContent className="p-0">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        {/* KPI title */}
                        <h4 className="text-xs text-muted-foreground">
                            {title}
                        </h4>

                        {/* Main KPI value */}
                        <p className="mt-2 text-2xl font-black tracking-tight">
                            {formatted.value}

                            {/* Optional unit label */}
                            <span className="mr-1 text-xs font-normal text-muted-foreground">
                                {formatted.unit}
                            </span>
                        </p>

                        {/* Trend indicator and comparison period */}
                        <div className="mt-1.5 flex items-center gap-2">
                            <Badge
                                variant={positive ? "success" : "destructive"}
                                className="border-0 [&_svg]:size-3">
                                {/* Trend direction icon */}
                                {positive ? <TrendingUp /> : <TrendingDown />}
                                {/* Percentage change */}
                                {formatNumberFa(delta)}%
                            </Badge>

                            {/* Comparison description */}
                            <span className="text-muted-foreground text-[10px] text-nowrap">
                                {compare}
                            </span>
                        </div>
                    </div>

                    {/* KPI icon */}
                    <span
                        className={cn(
                            "flex items-center justify-center size-10 rounded-full shrink-0",
                            c.text,
                            c.bg,
                        )}>
                        <Icon size={20} />
                    </span>
                </div>

                {/* Optional mini chart */}
                {chart && (
                    <div className="mt-2">
                        <AreaChart
                            data={chart}
                            areas={[
                                {
                                    dataKey: "value",
                                    color: c.stroke,
                                },
                            ]}
                            height={48}
                            // Hide chart details for compact KPI display.
                            cartesianGrid={false}
                            showTooltip={false}
                            showLegend={false}
                            showXAxis={false}
                            showYAxis={false}
                        />
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

KPICard.propTypes = {
    // KPI title displayed above the value.
    title: PropTypes.string.isRequired,

    // Main metric value.
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

    // Optional value unit (%, تومان, عدد, etc.).
    unit: PropTypes.string,

    // Percentage change compared to previous period.
    delta: PropTypes.number.isRequired,

    // Description of comparison period.
    compare: PropTypes.string,

    // Icon component displayed in the card.
    icon: PropTypes.elementType.isRequired,

    // Semantic color variant.
    color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),

    // Optional chart data for mini trend visualization.
    chart: PropTypes.arrayOf(PropTypes.object),
};

export default KPICard;
