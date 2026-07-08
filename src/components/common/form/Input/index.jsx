import { forwardRef } from "react";
import PropTypes from "prop-types";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

/**
 * Input style variants using Class Variance Authority (CVA).
 *
 * Supports configurable size, border radius, validation state,
 * and automatic padding when start or end icons are present.
 */
const inputVariants = cva(
    "w-full border rounded-md bg-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 transition-all disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            size: {
                sm: "h-8 px-3 text-sm",
                md: "h-9 px-4",
                lg: "h-10 px-4 text-base",
            },
            radius: {
                none: "rounded-none",
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
                full: "rounded-full",
            },
            invalid: {
                true: "border-destructive focus-visible:border-destructive focus-visible:ring-destructive",
                false: "border-input focus-visible:border-ring focus-visible:ring-ring",
            },
            // Increase left padding when a leading icon exists.
            startIcon: {
                true: "ps-9",
                false: "",
            },

            // Increase right padding when a trailing icon exists.
            endIcon: {
                true: "pe-9",
                false: "",
            },
        },
        defaultVariants: {
            size: "md",
            radius: "md",
            invalid: false,
            startIcon: false,
            endIcon: false,
        },
    },
);

/**
 * Reusable Input component.
 *
 * Features:
 * - Multiple sizes
 * - Configurable border radius
 * - Validation styling
 * - Optional start and end icons
 * - Disabled state support
 * - Forwards refs to the native input element
 */
const Input = forwardRef(
    (
        {
            type = "text",
            size,
            radius,
            invalid,
            disabled = false,
            startIcon,
            endIcon,
            className = "",
            ...props
        },
        ref,
    ) => {
        return (
            <div className="relative">
                {/* Leading icon */}
                {startIcon && (
                    <span className="absolute inset-s-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground flex items-center">
                        {startIcon}
                    </span>
                )}

                <input
                    ref={ref}
                    type={type}
                    disabled={disabled}
                    // Only render aria-invalid when the input is invalid.
                    aria-invalid={invalid || undefined}
                    className={cn(
                        // Generate variant classes and merge with custom classes.
                        inputVariants({
                            size,
                            radius,
                            invalid,
                            startIcon: !!startIcon,
                            endIcon: !!endIcon,
                        }),
                        className,
                    )}
                    {...props}
                />

                {/* Trailing icon */}
                {endIcon && (
                    <span className="absolute inset-e-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground flex items-center">
                        {endIcon}
                    </span>
                )}
            </div>
        );
    },
);

Input.displayName = "Input";

/**
 * Runtime prop validation.
 */
Input.propTypes = {
    type: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    radius: PropTypes.oneOf(["none", "sm", "md", "lg", "full"]),
    invalid: PropTypes.bool,
    disabled: PropTypes.bool,
    startIcon: PropTypes.node,
    endIcon: PropTypes.node,
    className: PropTypes.string,
};

export default Input;
