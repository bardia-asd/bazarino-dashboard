import { AlertCircle, RefreshCcw } from "lucide-react";
import PropTypes from "prop-types";
import Button from "@/components/common/Button";

/**
 * Error state component.
 *
 * Displays an error message with an optional
 * retry action when data fetching fails.
 */
const ErrorState = ({
    title = "خطایی رخ داده است",
    message = "دریافت اطلاعات با مشکل مواجه شد",
    onRetry,
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-10 text-center">
            {/* Error icon */}
            <div className="flex size-10 items-center justify-center rounded-full bg-destructive/10">
                <AlertCircle size={20} className="text-destructive" />
            </div>

            {/* Error title */}
            <h3 className="mt-3 text-sm font-semibold">{title}</h3>

            {/* Error description */}
            <p className="mt-1 max-w-xs text-xs text-muted-foreground">
                {message}
            </p>

            {/* Retry action */}
            {onRetry && (
                <Button
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    onClick={onRetry}>
                    <RefreshCcw size={14} />
                    تلاش مجدد
                </Button>
            )}
        </div>
    );
};

ErrorState.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    onRetry: PropTypes.func,
};

export default ErrorState;
