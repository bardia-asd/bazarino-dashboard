import { Package, Pencil, Trash2 } from "lucide-react";
import PropTypes from "prop-types";
import { TableCell, TableRow } from "@/components/common/Table";
import Button from "@/components/common/Button";
import ProductStatusBadge from "../ProductStatusBadge";
import { formatNumberFa } from "@/utils/formatter";

/**
 * Product table row.
 *
 * Displays product information including
 * pricing, inventory, status, seller,
 * sales, and row actions.
 */
const ProductTableRow = ({ product }) => {
    const {
        product_name,
        sku,
        category,
        brand,
        price,
        stock,
        status,
        seller_name,
        sales,
    } = product;

    return (
        <TableRow className="text-xs">
            {/* Product information */}
            <TableCell>
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-muted text-muted-foreground">
                        <Package size={20} />
                    </div>

                    <span className="max-w-60 truncate font-semibold">
                        {product_name}
                    </span>
                </div>
            </TableCell>

            {/* Product SKU */}
            <TableCell className="text-muted-foreground">{sku}</TableCell>

            {/* Category and brand */}
            <TableCell>
                <div className="flex flex-col">
                    <span className="text-xs font-medium">{category}</span>

                    <span className="text-[10px] text-muted-foreground">
                        {brand}
                    </span>
                </div>
            </TableCell>

            {/* Product price */}
            <TableCell className="font-bold">
                {formatNumberFa(price)}
                <span className="mr-1 text-muted-foreground">تومان</span>
            </TableCell>

            {/* Available stock */}
            <TableCell className="font-bold">{formatNumberFa(stock)}</TableCell>

            {/* Product status */}
            <TableCell>
                <ProductStatusBadge status={status} />
            </TableCell>

            {/* Seller name */}
            <TableCell className="text-muted-foreground">
                {seller_name}
            </TableCell>

            {/* Total sales */}
            <TableCell>{formatNumberFa(sales)}</TableCell>

            {/* Row actions */}
            <TableCell>
                <div className="flex items-center gap-0.5">
                    {/* Edit product */}
                    <Button
                        variant="secondary"
                        size="icon"
                        className="size-8 bg-transparent hover:bg-accent">
                        <Pencil size={16} />
                    </Button>

                    {/* Delete product */}
                    <Button
                        variant="destructive"
                        size="icon"
                        className="size-8 bg-transparent text-destructive hover:bg-destructive/10">
                        <Trash2 size={16} />
                    </Button>
                </div>
            </TableCell>
        </TableRow>
    );
};

ProductTableRow.propTypes = {
    product: PropTypes.shape({
        product_name: PropTypes.string.isRequired,
        sku: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        status: PropTypes.oneOf([
            "active",
            "inactive",
            "out_of_stock",
            "low_stock",
        ]).isRequired,
        seller_name: PropTypes.string.isRequired,
        sales: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductTableRow;
