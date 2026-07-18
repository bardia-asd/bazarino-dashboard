import PropTypes from "prop-types";
import {
    Cell,
    Legend,
    Pie,
    PieChart as RechartPieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import CustomTooltip from "../CustomTooltip";
import PieCustomLegend from "../PieCustomLegend";

/**
 * Reusable PieChart component.
 *
 * A wrapper around Recharts PieChart that provides
 * a responsive pie/donut chart with custom tooltip
 * and custom sorted legend support.
 */
const PieChart = ({
    data,
    height = 300,
    colors = [],
    showLegend = true,
    showTooltip = true,
}) => {
    return (
        // Makes the chart responsive to its parent container size
        <ResponsiveContainer width="100%" height={height}>
            <RechartPieChart>
                {/* Main pie chart configuration */}
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    // Creates donut style by adding an inner radius
                    innerRadius={60}
                    outerRadius={95}
                    // Separates slices using background color
                    stroke="var(--color-background)"
                    paddingAngle={5}>
                    {/* Apply custom colors to each pie slice */}
                    {data.map((_, i) => (
                        <Cell
                            key={`cell-${i}`}
                            fill={colors[i] ?? "var(--color-primary)"}
                        />
                    ))}
                </Pie>

                {/* Custom tooltip with Persian number formatting */}
                {showTooltip && <Tooltip content={<CustomTooltip />} />}

                {/* Custom legend sorted by highest value */}
                {showLegend && <Legend content={<PieCustomLegend />} />}
            </RechartPieChart>
        </ResponsiveContainer>
    );
};

PieChart.propTypes = {
    // Chart data items containing label and numeric value
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
        }),
    ).isRequired,

    // Chart container height
    height: PropTypes.number,

    // Optional colors for each pie slice
    colors: PropTypes.arrayOf(PropTypes.string),

    // Controls legend visibility
    showLegend: PropTypes.bool,

    // Controls tooltip visibility
    showTooltip: PropTypes.bool,
};

export default PieChart;
