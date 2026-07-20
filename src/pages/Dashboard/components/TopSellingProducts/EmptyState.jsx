import { PackageOpen } from "lucide-react";
import PropTypes from "prop-types";

/**
 * Empty state component.
 *
 * Displays a placeholder when there is no data
 * available to show.
 */
const EmptyState = ({
    icon: Icon = PackageOpen,
    title = "داده‌ای وجود ندارد",
    description,
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-10 text-center">
            {/* Empty state icon */}
            <div className="flex size-10 items-center justify-center rounded-full bg-muted">
                <Icon size={20} className="text-muted-foreground" />
            </div>

            {/* Empty state title */}
            <h3 className="mt-3 text-sm font-semibold">{title}</h3>

            {/* Optional description */}
            {description && (
                <p className="mt-1 max-w-xs text-xs text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    );
};

EmptyState.propTypes = {
    icon: PropTypes.elementType,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default EmptyState;
