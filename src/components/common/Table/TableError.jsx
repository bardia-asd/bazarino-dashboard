import PropTypes from "prop-types";
import Button from "../Button";
import { AlertCircle, RefreshCcw } from "lucide-react";

/**
 * Table error state component.
 *
 * Displays an error message when table data
 * cannot be loaded and provides an optional retry action.
 */
const TableError = ({ title = "خطایی رخ داده است", message, onRetry }) => {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
            {/* Error icon */}
            <AlertCircle size={32} className="text-destructive" />

            {/* Error title */}
            <h3 className="mt-3 text-sm font-semibold">{title}</h3>

            {/* Optional error description */}
            {message && (
                <p className="mt-1 text-xs text-muted-foreground">{message}</p>
            )}

            {/* Retry button */}
            {onRetry && (
                <Button
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={onRetry}>
                    <RefreshCcw size={14} />
                    تلاش مجدد
                </Button>
            )}
        </div>
    );
};

TableError.propTypes = {
    // Main error message
    title: PropTypes.string,

    // Additional error details
    message: PropTypes.string,

    // Callback for retrying the failed request
    onRetry: PropTypes.func,
};

export default TableError;
