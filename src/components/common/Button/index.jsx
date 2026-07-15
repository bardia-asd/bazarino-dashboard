import { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

/**
 * Button style variants using Class Variance Authority (CVA).
 *
 * Base classes are shared across every button, while variants allow
 * different visual styles, sizes, border radius, and width without
 * manually concatenating Tailwind classes.
 */
const buttonVariants = cva(
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:pointer-events-none",
    {
        variants: {
            variant: {
                primary:
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                sm: "h-8 px-3 text-sm",
                md: "h-9 px-4",
                lg: "h-10 px-8",
                icon: "h-9 w-9",
            },
            radius: {
                none: "rounded-none",
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
                full: "rounded-full",
            },
            fullWidth: {
                true: "w-full",
                false: "",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            radius: "md",
            fullWidth: false,
        },
    },
);

/**
 * Reusable Button component.
 *
 * Features:
 * - Multiple visual variants
 * - Different sizes
 * - Configurable border radius
 * - Optional full-width mode
 * - Supports polymorphic rendering through the `as` prop
 * - Forwards refs to the underlying element
 */
const Button = forwardRef(
    (
        {
            children,
            variant,
            size,
            radius,
            fullWidth,
            as: Component = "button",
            className = "",
            ...props
        },
        ref,
    ) => {
        return (
            <Component
                ref={ref}
                className={cn(
                    // Merge CVA-generated classes with custom classes.
                    buttonVariants({
                        variant,
                        size,
                        radius,
                        fullWidth,
                    }),
                    className,
                )}
                {...props}>
                {children}
            </Component>
        );
    },
);

Button.displayName = "Button";

/**
 * Runtime prop validation.
 */
Button.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf([
        "primary",
        "secondary",
        "outline",
        "ghost",
        "destructive",
        "link",
    ]),
    size: PropTypes.oneOf(["sm", "md", "lg", "icon"]),
    radius: PropTypes.oneOf(["none", "sm", "md", "lg", "full"]),
    as: PropTypes.elementType,
    className: PropTypes.string,
};

export default Button;
