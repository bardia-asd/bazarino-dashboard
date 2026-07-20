import PropTypes from "prop-types";
import {
    ResponsiveContainer,
    BarChart as RechartsBarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from "recharts";
import CustomTooltip from "../CustomTooltip";
import { formatCompactNumberFa } from "@/utils/formatter";

/**
 * Reusable bar chart component.
 *
 * Supports:
 * - Vertical and horizontal layouts
 * - Multiple data series
 * - Custom tooltip and legend
 * - Optional axes and grid
 * - Responsive sizing
 */
const BarChart = ({
    data,
    xKey,
    bars,
    height = 300,
    margin = {
        top: 10,
        right: 10,
        left: 0,
        bottom: 0,
    },

    showTooltip = true,
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    cartesianGrid = true,

    horizontal = false,
}) => {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <RechartsBarChart
                data={data}
                layout={horizontal ? "vertical" : "horizontal"}
                margin={margin}>
                {/* Chart background grid */}
                {cartesianGrid && (
                    <CartesianGrid
                        strokeDasharray="3 3"
                        className="stroke-border"
                    />
                )}

                {/* X axis */}
                {showXAxis && (
                    <XAxis
                        dataKey={horizontal ? undefined : xKey}
                        type={horizontal ? "number" : "category"}
                        tickLine={false}
                        axisLine={false}
                        tick={{
                            fontSize: 14,
                            fill: "var(--muted-foreground)",
                        }}
                    />
                )}

                {/* Y axis */}
                {showYAxis && (
                    <YAxis
                        dataKey={horizontal ? xKey : undefined}
                        type={horizontal ? "category" : "number"}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={formatCompactNumberFa}
                        tick={{
                            fontSize: 12,
                            fill: "var(--muted-foreground)",
                            dx: 2,
                            textAnchor: "start",
                        }}
                    />
                )}

                {/* Custom tooltip */}
                {showTooltip && (
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{
                            fill: "var(--accent)",
                        }}
                    />
                )}

                {/* Chart legend */}
                {showLegend && <Legend wrapperStyle={{ fontSize: 12 }} />}

                {/* Data bars */}
                {bars.map((bar) => (
                    <Bar
                        key={bar.dataKey}
                        dataKey={bar.dataKey}
                        name={bar.name}
                        fill={bar.color}
                        radius={[8, 8, 0, 0]}
                        activeBar={{
                            fill: "var(--color-primary)",
                            opacity: 0.9,
                        }}
                    />
                ))}
            </RechartsBarChart>
        </ResponsiveContainer>
    );
};

BarChart.propTypes = {
    // Chart dataset
    data: PropTypes.arrayOf(PropTypes.object).isRequired,

    // Key used for category axis
    xKey: PropTypes.string.isRequired,

    // Bar series configuration
    bars: PropTypes.arrayOf(
        PropTypes.shape({
            dataKey: PropTypes.string.isRequired,
            name: PropTypes.string,
            color: PropTypes.string,
        }),
    ).isRequired,

    // Chart dimensions
    height: PropTypes.number,

    // Chart spacing configuration
    margin: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        left: PropTypes.number,
        bottom: PropTypes.number,
    }),

    // Visibility controls
    showTooltip: PropTypes.bool,
    showLegend: PropTypes.bool,
    showXAxis: PropTypes.bool,
    showYAxis: PropTypes.bool,
    cartesianGrid: PropTypes.bool,

    // Switch between vertical and horizontal bars
    horizontal: PropTypes.bool,
};

export default BarChart;
