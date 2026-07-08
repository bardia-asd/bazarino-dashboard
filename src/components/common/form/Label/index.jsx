import { forwardRef } from "react";
import PropTypes from "prop-types";
import { cn } from "@/utils/cn";

/**
 * Reusable Label component.
 *
 * Features:
 * - Forwards refs to the native label element
 * - Provides consistent typography
 * - Supports custom styling through the className prop
 */
const Label = forwardRef(({ children, className, ...props }, ref) => {
    return (
        <label
            ref={ref}
            // Merge default styles with custom classes.
            className={cn("text-sm font-medium", className)}
            {...props}>
            {children}
        </label>
    );
});

Label.displayName = "Label";

/**
 * Runtime prop validation.
 */
Label.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    htmlFor: PropTypes.string,
};

export default Label;
