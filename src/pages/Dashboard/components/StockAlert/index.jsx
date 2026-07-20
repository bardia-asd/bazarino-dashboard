import { Link } from "react-router";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/common/Card";
import Button from "@/components/common/Button";
import { stockAlertData } from "@/data/stockAlertData";
import StockAlertItem from "./StockAlertItem";
import { Boxes } from "lucide-react";

/**
 * Stock alert card component.
 *
 * Displays products with low inventory levels
 * and provides quick access to inventory management
 * and replenishment actions.
 */
const StockAlert = () => {
    return (
        <Card className="flex flex-col">
            <CardHeader className="items-end">
                <div>
                    {/* Card title */}
                    <CardTitle>هشدار موجودی</CardTitle>

                    {/* Card description */}
                    <CardDescription className="mt-1">
                        محصولات با موجودی کم یا رو به اتمام
                    </CardDescription>
                </div>

                {/* Navigate to inventory page */}
                <Button as={Link} to="inventory" variant="ghost" size="sm">
                    انبار
                </Button>
            </CardHeader>

            {/* Low-stock products list */}
            <CardContent className="space-y-3 flex-1">
                {stockAlertData.map((stock) => (
                    <StockAlertItem
                        key={stock.id}
                        name={stock.name}
                        stock={stock.stock}
                        maxStock={stock.maxStock}
                    />
                ))}
            </CardContent>

            <CardFooter>
                {/* Quick action to create a replenishment order */}
                <Button
                    variant="outline"
                    radius="full"
                    className="text-sm"
                    fullWidth>
                    <Boxes size={16} />
                    ایجاد سفارش تأمین
                </Button>
            </CardFooter>
        </Card>
    );
};

export default StockAlert;
