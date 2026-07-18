import PropTypes from "prop-types";
import {
    ResponsiveContainer,
    AreaChart as RechartsAreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    Legend,
} from "recharts";
import { formatCompactNumberFa } from "@/utils/formatter";
import CustomTooltip from "../CustomTooltip";
import { useId } from "react";

/**
 * Reusable area chart component.
 *
 * Built on top of Recharts AreaChart.
 *
 * Supports:
 * - Multiple area series
 * - Custom gradients
 * - Persian number formatting
 * - Optional tooltip, legend, and axes
 * - Responsive sizing
 */
const AreaChart = ({
    data,
    xKey,
    areas,
    height = 300,
    margin = {
        top: 10,
        right: 10,
        left: 20,
        bottom: 0,
    },
    cartesianGrid = true,
    showTooltip = true,
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
}) => {
    const gradientId = useId();

    return (
        <ResponsiveContainer width="100%" height={height}>
            <RechartsAreaChart data={data} margin={margin}>
                {/* 
                    Generate gradients dynamically for each area.
                    Each area gets its own gradient based on its color.
                */}
                <defs>
                    {areas.map((area) => (
                        <linearGradient
                            key={area.dataKey}
                            id={`${gradientId}-${area.dataKey}`}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1">
                            {/* Gradient start with visible opacity */}
                            <stop
                                offset="5%"
                                stopColor={area.color}
                                stopOpacity={0.3}
                            />

                            {/* Gradient fades out at the bottom */}
                            <stop
                                offset="95%"
                                stopColor={area.color}
                                stopOpacity={0}
                            />
                        </linearGradient>
                    ))}
                </defs>

                {/* Chart background grid */}
                {cartesianGrid && (
                    <CartesianGrid
                        strokeDasharray="3 3"
                        className="stroke-border"
                    />
                )}

                {/* X axis displaying categories or dates */}
                {showXAxis && (
                    <XAxis
                        dataKey={xKey}
                        tickLine={false}
                        axisLine={false}
                        tick={{
                            fontSize: 14,
                            fill: "var(--muted-foreground)",
                        }}
                    />
                )}

                {/* Y axis displaying formatted numeric values */}
                {showYAxis && (
                    <YAxis
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

                {/* Custom tooltip with Persian formatting */}
                {showTooltip && <Tooltip content={<CustomTooltip />} />}

                {/* Chart legend */}
                {showLegend && <Legend />}

                {/* Render each area series */}
                {areas.map((area) => (
                    <Area
                        key={area.dataKey}
                        // Smooth line curve
                        type="monotone"
                        // Data property used for this series
                        dataKey={area.dataKey}
                        // Line styling
                        strokeWidth={2}
                        stroke={area.color}
                        // Label shown in tooltip and legend
                        name={area.name}
                        // Connect missing values between points
                        connectNulls
                        // Apply generated gradient fill
                        fill={`url(#${gradientId}-${area.dataKey})`}
                        // Entry animation
                        animationDuration={800}
                        animationEasing="ease-out"
                    />
                ))}
            </RechartsAreaChart>
        </ResponsiveContainer>
    );
};

AreaChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    xKey: PropTypes.string.isRequired,
    areas: PropTypes.arrayOf(
        PropTypes.shape({
            dataKey: PropTypes.string.isRequired,
            name: PropTypes.string,
            stroke: PropTypes.string,
            fill: PropTypes.string,
            type: PropTypes.string,
        }),
    ).isRequired,
    height: PropTypes.number,
    margin: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        left: PropTypes.number,
        bottom: PropTypes.number,
    }),
    cartesianGrid: PropTypes.bool,
    showTooltip: PropTypes.bool,
    showLegend: PropTypes.bool,
    showXAxis: PropTypes.bool,
    showYAxis: PropTypes.bool,
};

export default AreaChart;
