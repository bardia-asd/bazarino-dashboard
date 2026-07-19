import PropTypes from "prop-types";
import { getShippingStatus } from "@/features/orders/utils/shippingStatus";
import Badge from "@/components/common/Badge";

/**
 * Order shipping status badge component.
 *
 * Displays the current shipping status
 * using the appropriate badge variant and label.
 */
const OrderShippingBadge = ({ status }) => {
    const shipping = getShippingStatus(status);

    return <Badge variant={shipping.variant}>{shipping.label}</Badge>;
};

OrderShippingBadge.propTypes = {
    status: PropTypes.oneOf([
        "processing",
        "shipped",
        "delivered",
        "cancelled",
        "returned",
    ]).isRequired,
};

export default OrderShippingBadge;
