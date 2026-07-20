import PropTypes from "prop-types";
import Progress from "@/components/common/Progress";
import Badge from "@/components/common/Badge";
import { formatNumberFa } from "@/utils/formatter";

/**
 * Stock alert item component.
 *
 * Displays the current stock quantity for a product
 * along with a progress bar indicating remaining stock.
 */
const StockAlertItem = ({ maxStock, name, stock }) => {
    // Calculate stock percentage for the progress bar
    const percentage = (stock / maxStock) * 100;

    return (
        <div className="space-y-1.5">
            <div className="flex items-center justify-between gap-2">
                {/* Product name */}
                <p className="text-xs font-medium">{name}</p>

                {/* Current stock quantity */}
                <Badge variant="destructive" className="border-0">
                    {formatNumberFa(stock)} عدد
                </Badge>
            </div>

            {/* Remaining stock indicator */}
            <Progress value={percentage} />
        </div>
    );
};

StockAlertItem.propTypes = {
    maxStock: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
};

export default StockAlertItem;
