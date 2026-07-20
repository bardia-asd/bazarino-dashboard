import PropTypes from "prop-types";
import OrderShippingBadge from "@/features/orders/components/OrderShippingBadge";
import { formatNumberFa } from "@/utils/formatter";
import { TableCell, TableRow } from "@/components/common/Table";

/**
 * Latest order table row component.
 *
 * Displays order information including customer,
 * seller, item count, amount, and shipping status.
 */
const LatestTableRow = ({ order }) => {
    const {
        order_number,
        customer_name,
        seller_name,
        item_count,
        total_amount,
        shipping_status,
    } = order;

    return (
        <TableRow className="text-xs">
            {/* Order identifier */}
            <TableCell className="line-clamp-1">{order_number}</TableCell>

            {/* Customer name */}
            <TableCell className="font-medium">{customer_name}</TableCell>

            {/* Seller name */}
            <TableCell className="text-muted-foreground">
                {seller_name}
            </TableCell>

            {/* Number of purchased items */}
            <TableCell>{formatNumberFa(item_count)}</TableCell>

            {/* Total order amount */}
            <TableCell className="font-bold">
                {formatNumberFa(total_amount)}
                <span className="mr-1 text-xs font-normal text-muted-foreground">
                    تومان
                </span>
            </TableCell>

            {/* Current shipping status */}
            <TableCell>
                <OrderShippingBadge status={shipping_status} />
            </TableCell>
        </TableRow>
    );
};

LatestTableRow.propTypes = {
    // Order data displayed in the table row
    order: PropTypes.shape({
        order_number: PropTypes.string,
        customer_name: PropTypes.string,
        seller_name: PropTypes.string,
        item_count: PropTypes.number,
        total_amount: PropTypes.number,

        // Shipping status object used by OrderShippingBadge
        shipping_status: PropTypes.shape({
            label: PropTypes.string,
            variant: PropTypes.string,
        }),
    }).isRequired,
};

export default LatestTableRow;
