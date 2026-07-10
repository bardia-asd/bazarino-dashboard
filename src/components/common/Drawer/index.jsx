import { createContext, forwardRef, useContext } from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

/**
 * Drawer style variants using Class Variance Authority (CVA).
 *
 * Supports different drawer directions while keeping
 * consistent positioning, spacing, and visual styling.
 */
const drawerVariants = cva(
    "z-50 flex flex-col bg-background shadow-lg border-border h-auto p-6",
    {
        variants: {
            direction: {
                left: "fixed inset-y-0 left-0 w-full max-w-sm sm:max-w-md border-r bg-background",
                right: "fixed inset-y-0 right-0 w-full max-w-sm sm-max-w-md border-l bg-background",
                top: "fixed top-0 left-0 w-full max-h-[80vh] border-b",
                bottom: "fixed bottom-0 left-0 w-full h-auto max-h-[80vh] rounded-t-xl border-t",
            },
        },
        defaultVariants: {
            direction: "bottom",
        },
    },
);

/**
 * Provides drawer direction to child components.
 *
 * Allows components like DrawerContent to adapt
 * their layout based on the parent drawer direction.
 */
const DrawerContext = createContext({ direction: "bottom" });

/**
 * Custom hook for accessing drawer context.
 */
const useDrawer = () => useContext(DrawerContext);

/**
 * Root Drawer component.
 *
 * Wraps the Vaul drawer primitive and provides
 * shared configuration through context.
 */
const Drawer = ({
    direction = "bottom",
    shouldScaleBackground = true,
    children,
    ...props
}) => {
    return (
        <DrawerContext.Provider value={{ direction }}>
            <DrawerPrimitive.Root
                direction={direction}
                shouldScaleBackground={shouldScaleBackground}
                {...props}>
                {children}
            </DrawerPrimitive.Root>
        </DrawerContext.Provider>
    );
};

/**
 * Runtime prop validation.
 */
Drawer.propTypes = {
    children: PropTypes.node,
    shouldScaleBackground: PropTypes.bool,
    direction: PropTypes.oneOf(["left", "right", "bottom", "top"]),
};

/**
 * Element that opens the drawer.
 */
const DrawerTrigger = DrawerPrimitive.Trigger;

/**
 * Renders drawer content inside a portal.
 */
const DrawerPortal = DrawerPrimitive.Portal;

/**
 * Element that closes the drawer.
 */
const DrawerClose = DrawerPrimitive.Close;

/**
 * Drawer backdrop.
 *
 * Covers the viewport behind the drawer content.
 */
const DrawerOverlay = forwardRef(({ className = "", ...props }, ref) => {
    return (
        <DrawerPrimitive.Overlay
            ref={ref}
            className={cn("fixed inset-0 z-50 bg-black/50", className)}
            {...props}
        />
    );
});

DrawerOverlay.displayName = "DrawerOverlay";

/**
 * Runtime prop validation.
 */
DrawerOverlay.propTypes = {
    className: PropTypes.string,
};

/**
 * Drawer content container.
 *
 * Renders the drawer panel and applies styles
 * based on the configured drawer direction.
 */
const DrawerContent = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        const { direction } = useDrawer();

        return (
            <DrawerPortal>
                <DrawerOverlay />

                <DrawerPrimitive.Content
                    ref={ref}
                    className={cn(drawerVariants({ direction }), className)}
                    {...props}>
                    {children}
                </DrawerPrimitive.Content>
            </DrawerPortal>
        );
    },
);

DrawerContent.displayName = "DrawerContent";

/**
 * Runtime prop validation.
 */
DrawerContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Drawer header container.
 *
 * Groups title and description content
 * with consistent spacing.
 */
const DrawerHeader = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "flex flex-col gap-1.5 text-center sm:text-start",
                    className,
                )}
                {...props}>
                {children}
            </div>
        );
    },
);

DrawerHeader.displayName = "DrawerHeader";

/**
 * Runtime prop validation.
 */
DrawerHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Drawer footer container.
 *
 * Used for actions or controls placed
 * at the bottom of the drawer.
 */
const DrawerFooter = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "flex flex-col-reverse sm:flex-row sm:justify-end gap-2 mt-auto",
                    className,
                )}
                {...props}>
                {children}
            </div>
        );
    },
);

DrawerFooter.displayName = "DrawerFooter";

/**
 * Runtime prop validation.
 */
DrawerFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Drawer title component.
 *
 * Represents the primary heading of the drawer.
 */
const DrawerTitle = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <DrawerPrimitive.Title
                ref={ref}
                className={cn(
                    "text-lg font-semibold leading-none tracking-tight",
                    className,
                )}
                {...props}>
                {children}
            </DrawerPrimitive.Title>
        );
    },
);

DrawerTitle.displayName = "DrawerTitle";

/**
 * Runtime prop validation.
 */
DrawerTitle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Drawer description component.
 *
 * Displays supporting text below the drawer title.
 */
const DrawerDescription = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <DrawerPrimitive.Description
                ref={ref}
                className={cn("text-sm text-muted-foreground", className)}
                {...props}>
                {children}
            </DrawerPrimitive.Description>
        );
    },
);

DrawerDescription.displayName = "DrawerDescription";

/**
 * Runtime prop validation.
 */
DrawerDescription.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export {
    Drawer,
    DrawerPortal,
    DrawerOverlay,
    DrawerTrigger,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerTitle,
    DrawerDescription,
};
