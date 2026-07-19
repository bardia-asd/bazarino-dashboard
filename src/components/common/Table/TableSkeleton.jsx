import PropTypes from "prop-types";
import Skeleton from "../Skeleton";

/**
 * Table loading skeleton component.
 *
 * Displays placeholder rows and columns while
 * table data is being fetched.
 */
const TableSkeleton = ({ rows = 6, columns = 8 }) => {
    return (
        <div className="divide-y divide-border">
            {/* Generate skeleton rows */}
            {Array.from({ length: rows }).map((_, row) => (
                <div key={row} className="flex items-center gap-4 py-3">
                    {/* Generate skeleton cells */}
                    {Array.from({ length: columns }).map((_, col) => (
                        <Skeleton key={col} className="h-4 flex-1" />
                    ))}
                </div>
            ))}
        </div>
    );
};

TableSkeleton.propTypes = {
    // Number of placeholder rows
    rows: PropTypes.number,

    // Number of placeholder columns per row
    columns: PropTypes.number,
};

export default TableSkeleton;
