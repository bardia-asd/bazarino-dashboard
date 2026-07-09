import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

/**
 * Badge style variants using Class Variance Authority (CVA).
 *
 * Supports multiple semantic variants for displaying
 * statuses, categories, and labels with consistent styling.
 */
const badgeVariants = cva(
    "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium border transition-all",
    {
        variants: {
            variant: {
                primary: "border-ring/80 bg-primary/10 text-primary",
                secondary: "border-border bg-muted/20 text-muted-foreground",
                success: "border-success/80 bg-success/10 text-success",
                destructive:
                    "border-destructive/80 bg-destructive/10 text-destructive",
                warning: "border-warning/80 bg-warning/10 text-warning",
                info: "border-info/80 bg-info/10 text-info",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    },
);

/**
 * Reusable Badge component.
 *
 * Features:
 * - Multiple semantic variants
 * - Compact pill-shaped appearance
 * - Supports custom styling through the className prop
 */
const Badge = ({ children, variant, className = "", ...props }) => {
    return (
        <div
            // Merge variant classes with custom classes.
            className={cn(badgeVariants({ variant }), className)}
            {...props}>
            {children}
        </div>
    );
};

/**
 * Runtime prop validation.
 */
Badge.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "destructive",
        "warning",
        "info",
    ]),
    className: PropTypes.string,
};

export default Badge;
