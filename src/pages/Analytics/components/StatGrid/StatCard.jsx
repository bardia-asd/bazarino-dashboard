import PropTypes from "prop-types";
import { Card, CardContent } from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import { formatValue, formatNumberFa } from "@/utils/formatter";

/**
 * Dashboard statistic card.
 *
 * Displays a key metric with its formatted value,
 * unit, and percentage change compared to the
 * previous period.
 */
const StatCard = ({ value, unit, label, delta }) => {
    // Determine whether the trend is positive or negative
    const positive = delta >= 0;

    // Format value based on its unit
    const formatted = formatValue(value, unit);

    return (
        <Card>
            <CardContent className="p-4">
                {/* Metric label */}
                <p className="text-xs text-muted-foreground">{label}</p>

                {/* Main metric value */}
                <p className="mt-2 text-2xl font-black tracking-tight">
                    {formatted.value}

                    <span className="mr-1 text-xs font-normal text-muted-foreground">
                        {formatted.unit}
                    </span>
                </p>

                {/* Percentage change */}
                <Badge variant={positive ? "success" : "destructive"}>
                    {formatNumberFa(delta)}%
                </Badge>
            </CardContent>
        </Card>
    );
};

StatCard.propTypes = {
    value: PropTypes.number.isRequired,
    unit: PropTypes.string,
    label: PropTypes.string.isRequired,
    delta: PropTypes.number.isRequired,
};

export default StatCard;
