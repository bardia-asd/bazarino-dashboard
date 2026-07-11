import { forwardRef } from "react";
import PropTypes from "prop-types";
import { cn } from "@/utils/cn";

/**
 * Root table component.
 *
 * Wraps the native table element inside a responsive
 * container that enables horizontal scrolling when needed.
 */
const Table = forwardRef(({ children, className = "", ...props }, ref) => {
    return (
        // Responsive wrapper for horizontal overflow.
        <div className="relative w-full overflow-x-auto scrollbar-thin scrollbar-thumb-border">
            <table
                ref={ref}
                className={cn(
                    "w-full caption-bottom text-sm border-collapse",
                    className,
                )}
                {...props}>
                {children}
            </table>
        </div>
    );
});

Table.displayName = "Table";

Table.propTypes = { children: PropTypes.node, className: PropTypes.string };

/**
 * Table header section.
 *
 * Contains one or more header rows that define
 * the table column headings.
 */
const TableHeader = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <thead
                ref={ref}
                className={cn("[&_tr]:border-b", className)}
                {...props}>
                {children}
            </thead>
        );
    },
);

TableHeader.displayName = "TableHeader";

TableHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Table body section.
 *
 * Contains the primary table data rows.
 */
const TableBody = forwardRef(({ children, className = "", ...props }, ref) => {
    return (
        <tbody
            ref={ref}
            className={cn("[&_tr:last-child]:border-0", className)}
            {...props}>
            {children}
        </tbody>
    );
});

TableBody.displayName = "TableBody";

TableBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Table footer section.
 *
 * Displays summary information such as totals
 * or aggregate values.
 */
const TableFooter = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <tfoot
                ref={ref}
                className={cn(
                    "border-t border-border bg-muted/50 font-medium [&>tr]:last:border-b-0",
                    className,
                )}
                {...props}>
                {children}
            </tfoot>
        );
    },
);

TableFooter.displayName = "TableFooter";

TableFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Table row component.
 *
 * Represents a single row within the table
 * and supports hover and selected states.
 */
const TableRow = forwardRef(({ children, className = "", ...props }, ref) => {
    return (
        <tr
            ref={ref}
            className={cn(
                "border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
                className,
            )}
            {...props}>
            {children}
        </tr>
    );
});

TableRow.displayName = "TableRow";

TableRow.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Table header cell.
 *
 * Represents a column heading within
 * the table header.
 */
const TableHead = forwardRef(({ children, className = "", ...props }, ref) => {
    return (
        <th
            ref={ref}
            className={cn(
                "h-10 px-2 py-3 text-right align-middle font-medium text-muted-foreground whitespace-nowrap",
                className,
            )}
            {...props}>
            {children}
        </th>
    );
});

TableHead.displayName = "TableHead";

TableHead.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Table data cell.
 *
 * Displays the content of a single
 * table column.
 */
const TableCell = forwardRef(({ children, className = "", ...props }, ref) => {
    return (
        <td
            ref={ref}
            className={cn(
                "px-2 py-3 align-middle whitespace-nowrap",
                className,
            )}
            {...props}>
            {children}
        </td>
    );
});

TableCell.displayName = "TableCell";

TableCell.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Table caption component.
 *
 * Provides a description or summary
 * for the table.
 */
const TableCaption = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <caption
                ref={ref}
                className={cn("mt-4 text-sm text-muted-foreground", className)}
                {...props}>
                {children}
            </caption>
        );
    },
);

TableCaption.displayName = "TableCaption";

TableCaption.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableRow,
    TableHead,
    TableCell,
    TableCaption,
};
