import * as PopoverPrimitive from "@radix-ui/react-popover";
import PropTypes from "prop-types";
import { cn } from "@/utils/cn";
import { forwardRef } from "react";

/**
 * Root popover component.
 *
 * Manages the popover state and provides context
 * for all popover subcomponents.
 */
const Popover = PopoverPrimitive.Root;

/**
 * Optional positioning anchor.
 *
 * Allows the popover to be positioned relative
 * to a custom anchor element.
 */
const PopoverAnchor = PopoverPrimitive.Anchor;

/**
 * Element that opens the popover.
 */
const PopoverTrigger = PopoverPrimitive.Trigger;

/**
 * Popover content container.
 *
 * Renders the popover inside a portal with
 * configurable alignment, offset, collision handling,
 * and animated transitions.
 */
const PopoverContent = forwardRef(
    (
        {
            children,
            align = "center",
            sideOffset = 8,
            className = "",
            ...props
        },
        ref,
    ) => {
        return (
            <PopoverPrimitive.Portal>
                <PopoverPrimitive.Content
                    ref={ref}
                    align={align}
                    sideOffset={sideOffset}
                    className={cn(
                        "z-50 w-72 rounded-md border border-border bg-popover text-popover-foreground p-4 shadow-lg outline-none data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out data-[side=top]:animate-slide-up data-[side=bottom]:animate-slide-down data-[side=left]:animate-slide-left data-[side=right]:animate-slide-right origin-[--radix-popover-content-transform-origin]",
                        className,
                    )}
                    {...props}>
                    {children}
                </PopoverPrimitive.Content>
            </PopoverPrimitive.Portal>
        );
    },
);

PopoverContent.displayName = "PopoverContent";

/**
 * Runtime prop validation.
 */
PopoverContent.propTypes = {
    children: PropTypes.node,
    align: PropTypes.oneOf(["start", "center", "end"]),
    sideOffset: PropTypes.number,
    className: PropTypes.string,
};

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
