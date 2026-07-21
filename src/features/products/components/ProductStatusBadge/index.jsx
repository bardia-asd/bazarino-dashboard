import PropTypes from "prop-types";
import Badge from "@/components/common/Badge";
import { getProductStatus } from "@/features/products/utils/productStatus";

const ProductStatusBadge = ({ status }) => {
    const productStatus = getProductStatus(status);

    return <Badge variant={productStatus.variant}>{productStatus.label}</Badge>;
};

ProductStatusBadge.propTypes = {
    status: PropTypes.oneOf(["active", "inactive", "out_of_stock", "low_stock"])
        .isRequired,
};

export default ProductStatusBadge;
