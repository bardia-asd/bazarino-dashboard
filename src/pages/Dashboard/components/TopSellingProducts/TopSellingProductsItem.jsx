import PropTypes from "prop-types";
import { Package } from "lucide-react";
import { formatNumberFa } from "@/utils/formatter";

/**
 * Displays a single top-selling product item.
 *
 * Shows product information including:
 * - Product name
 * - Number of sales
 * - Current stock
 * - Product price
 */
const TopSellingProductsItem = ({ product }) => {
    // Extract product data with default values
    const { product_name, sales = 0, stock = 0, price = 0 } = product;

    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-xl px-2.5 py-2 hover:bg-muted transition-colors">
            {/* Product information */}
            <div className="flex items-center gap-3 min-w-0">
                {/* Product placeholder icon */}
                <div className="flex items-center justify-center size-10 bg-muted text-muted-foreground rounded-lg shrink-0">
                    <Package size={16} />
                </div>

                {/* Product details */}
                <div className="min-w-0">
                    <p className="text-sm font-semibold truncate">
                        {product_name}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <span>{formatNumberFa(sales)} فروش</span>
                        <span>-</span>
                        <span>{formatNumberFa(stock)} موجودی</span>
                    </div>
                </div>
            </div>

            {/* Product price */}
            <div className="sm:text-left">
                <p className="text-sm font-bold">
                    {formatNumberFa(price)}

                    <span className="mr-1 text-xs font-normal text-muted-foreground">
                        تومان
                    </span>
                </p>
            </div>
        </div>
    );
};

TopSellingProductsItem.propTypes = {
    product: PropTypes.shape({
        product_name: PropTypes.string.isRequired,
        sales: PropTypes.number,
        stock: PropTypes.number,
        price: PropTypes.number,
    }).isRequired,
};

export default TopSellingProductsItem;
