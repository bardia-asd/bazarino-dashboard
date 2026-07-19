import { Toaster as Sonner, toast } from "sonner";
import { useTheme } from "@/context/ThemeContext";

/**
 * Global toast provider.
 *
 * Configures the application's toast notifications
 * with shared styling and default behavior.
 */
const Toaster = ({ ...props }) => {
    const { resolvedTheme } = useTheme();
    return (
        <Sonner
            // Default toast placement.
            position="top-left"
            richColors
            closeButton
            expand
            theme={resolvedTheme}
            // Default auto-dismiss duration (ms).
            duration={4000}
            toastOptions={{
                // Shared styles applied to every toast.
                classNames: {
                    toast: "border border-border bg-background text-foreground shadow-lg",
                    title: "font-medium",
                    description: "text-muted-foreground",
                    actionButton:
                        "bg-primary text-primary-foreground hover:opacity-90",
                    cancelButton:
                        "bg-muted text-muted-foreground hover:bg-muted/80",
                },
            }}
            {...props}
        />
    );
};

export { Toaster, toast };
