import PropTypes from "prop-types";
import { cn } from "@/utils/cn";

/**
 * Progress bar component.
 *
 * Displays a visual progress indicator based on
 * a percentage value between 0 and 100.
 */
const Progress = ({ value = 0, className = "", indicatorClassName = "" }) => {
    // Ensures the value stays within valid progress range
    const percentage = Math.min(Math.max(value, 0), 100);

    return (
        <div
            className={cn(
                "h-2 w-full overflow-hidden rounded-full bg-muted",
                className,
            )}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percentage}>
            {/* Progress indicator */}
            <div
                className={cn(
                    "h-full rounded-full bg-primary transition-all duration-300",
                    indicatorClassName,
                )}
                style={{
                    width: `${percentage}%`,
                }}
            />
        </div>
    );
};

Progress.propTypes = {
    // Current progress value (0-100)
    value: PropTypes.number,

    // Custom styles for progress container
    className: PropTypes.string,

    // Custom styles for progress indicator
    indicatorClassName: PropTypes.string,
};

export default Progress;
