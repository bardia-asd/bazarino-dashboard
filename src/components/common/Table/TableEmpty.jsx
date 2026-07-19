import PropTypes from "prop-types";
import { Inbox } from "lucide-react";

/**
 * Table empty state component.
 *
 * Displays a friendly placeholder when
 * there is no table data available.
 */
const TableEmpty = ({
    icon: Icon = Inbox,
    title = "داده‌ای وجود ندارد",
    description,
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
            {/* Empty state icon */}
            <div className="flex size-12 items-center justify-center rounded-full bg-muted">
                <Icon size={22} className="text-muted-foreground" />
            </div>

            {/* Empty state title */}
            <h3 className="mt-4 text-sm font-semibold">{title}</h3>

            {/* Optional description text */}
            {description && (
                <p className="mt-1 text-xs text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    );
};

TableEmpty.propTypes = {
    // Custom icon component displayed above the message
    icon: PropTypes.elementType,

    // Main empty state message
    title: PropTypes.string,

    // Additional explanation text
    description: PropTypes.string,
};

export default TableEmpty;
