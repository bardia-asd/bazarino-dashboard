import PropTypes from "prop-types";
import { cn } from "@/utils/cn";

/**
 * Reusable Field component.
 *
 * Acts as a layout wrapper for form controls by grouping
 * related elements such as labels, inputs, and helper or
 * error messages with consistent vertical spacing.
 */
const Field = ({ children, className = "" }) => {
    return (
        <div
            // Merge default layout styles with custom classes.
            className={cn("flex flex-col gap-2", className)}>
            {children}
        </div>
    );
};

/**
 * Runtime prop validation.
 */
Field.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Field;
