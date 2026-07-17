import PropTypes from "prop-types";
import { cn } from "@/utils/cn";
import { formatNumberFa } from "@/utils/formatter";

/**
 * Custom tooltip component for charts.
 *
 * Displays chart data inside a styled tooltip with:
 * - Persian number formatting
 * - Item labels and values
 * - Color indicators matching chart series
 *
 * Designed to be used with Recharts tooltip components.
 */
const CustomTooltip = ({ active, payload, label, className = "" }) => {
    // Prevent rendering when tooltip is inactive
    // or there is no chart data available.
    if (!active || !payload?.length) return null;

    return (
        <div
            dir="rtl"
            className={cn(
                // Tooltip container styles
                "bg-popover border border-border rounded-lg px-3 py-2 shadow-lg",
                className,
            )}>
            {/* Tooltip title, usually the chart category or date */}
            <p className="text-xs text-muted-foreground mb-2">{label}</p>

            {/* Chart data items */}
            <div className="flex flex-col gap-1">
                {payload.map((item) => (
                    <div
                        key={item.dataKey}
                        className="flex items-center justify-between gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            {/* Series color indicator */}
                            <span
                                className="size-2 rounded-full"
                                style={{
                                    backgroundColor: item.color,
                                }}
                            />

                            {/* Series name */}
                            <span className="text-muted-foreground">
                                {item.name}
                            </span>
                        </div>

                        {/* Formatted value */}
                        <span className="font-medium">
                            {formatNumberFa(item.value)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
    label: PropTypes.string,
    className: PropTypes.string,
};

export default CustomTooltip;
