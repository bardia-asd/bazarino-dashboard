import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import PropTypes from "prop-types";
import { cn } from "@/utils/cn";

/**
 * Textarea style variants using Class Variance Authority (CVA).
 *
 * Supports configurable border radius and validation state
 * while providing consistent styling across the application.
 */
const textareaVariants = cva(
    "w-full border rounded-md bg-transparent min-h-16 resize-none px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 transition-all disabled:cursor-not-allowed disabled:opacity-50 scrollbar-thin scrollbar-thumb-border",
    {
        variants: {
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
        },
        defaultVariants: {
            radius: "md",
            invalid: false,
        },
    },
);

/**
 * Reusable Textarea component.
 *
 * Features:
 * - Configurable border radius
 * - Validation styling
 * - Disabled state support
 * - Forwards refs to the native textarea element
 */
const Textarea = forwardRef(
    ({ radius, invalid, className = "", ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                // Only render aria-invalid when the textarea is invalid.
                aria-invalid={invalid || undefined}
                // Merge variant classes with custom classes.
                className={cn(textareaVariants({ radius, invalid }), className)}
                {...props}
            />
        );
    },
);

Textarea.displayName = "Textarea";

/**
 * Runtime prop validation.
 */
Textarea.propTypes = {
    radius: PropTypes.oneOf(["none", "sm", "md", "lg", "full"]),
    invalid: PropTypes.bool,
    className: PropTypes.string,
    rows: PropTypes.number,
};

export default Textarea;
