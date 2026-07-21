import PropTypes from "prop-types";
import { Card, CardContent } from "@/components/common/Card";
import { formatNumberFa } from "@/utils/formatter";
import { cn } from "@/utils/cn";

const colorMap = {
    primary: "text-primary",
    success: "text-success",
    warning: "text-warning",
    danger: "text-danger",
};

/**
 * Statistics card.
 *
 * Displays a single dashboard metric with
 * a configurable text color.
 */
const StatCard = ({ value, label, color }) => {
    return (
        <Card>
            <CardContent className="p-4">
                {/* Metric label */}
                <p className="text-xs text-muted-foreground">{label}</p>

                {/* Formatted metric value */}
                <p
                    className={cn(
                        "mt-2 text-2xl font-black tracking-tight",
                        colorMap[color],
                    )}>
                    {formatNumberFa(value)}
                </p>
            </CardContent>
        </Card>
    );
};

StatCard.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf(["primary", "success", "warning", "danger", "info"]),
};

export default StatCard;
