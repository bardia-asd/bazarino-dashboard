import PropTypes from "prop-types";
import { cn } from "@/utils/cn";

/**
 * Reusable Skeleton component.
 *
 * Displays a placeholder while content is loading,
 * helping reduce layout shifts and improve perceived performance.
 */
const Skeleton = ({ className = "", ...props }) => {
    return (
        <div
            // Merge default skeleton styles with custom classes.
            className={cn("animate-pulse rounded-md bg-muted", className)}
            {...props}
        />
    );
};

/**
 * Runtime prop validation.
 */
Skeleton.propTypes = {
    className: PropTypes.string,
};

export default Skeleton;
