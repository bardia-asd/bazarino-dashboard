import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

/**
 * Spinner style variants using Class Variance Authority (CVA).
 *
 * Supports multiple sizes while maintaining consistent
 * loading indicator styling throughout the application.
 */
const spinnerVariants = cva(
    "animate-spin rounded-full border-2 border-primary border-t-transparent",
    {
        variants: {
            size: {
                sm: "h-4 w-4",
                md: "h-6 w-6",
                lg: "h-8 w-8",
            },
        },
        defaultVariants: {
            size: "sm",
        },
    },
);

/**
 * Reusable Spinner component.
 *
 * Displays a loading indicator that can be used while
 * waiting for asynchronous operations to complete.
 */
const Spinner = ({ size, className = "" }) => {
    return (
        <div
            className={cn(spinnerVariants({ size }), className)}
            role="status"
            aria-label="Loading"
        />
    );
};

/**
 * Runtime prop validation.
 */
Spinner.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Spinner;
