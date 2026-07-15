import { Link } from "react-router";
import { Package, Plus, ShoppingCart, Ticket, Users } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/common/DropdownMenu";
import Button from "@/components/common/Button";

/**
 * Quick actions component.
 *
 * Displays a dropdown menu containing
 * shortcuts for creating common resources.
 */
const QuickActions = () => {
    return (
        <DropdownMenu dir="rtl">
            {/* Dropdown trigger */}
            <DropdownMenuTrigger asChild>
                <Button radius="full" className="text-sm px-2.5 lg:px-4">
                    <Plus size={16} />
                    <span className="hidden lg:inline"> افزودن</span>
                </Button>
            </DropdownMenuTrigger>

            {/* Quick actions menu */}
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>افزودن سریع</DropdownMenuLabel>

                {/* Create new product */}
                <DropdownMenuItem asChild>
                    <Link to="products">
                        <Package size={18} />
                        محصول جدید
                    </Link>
                </DropdownMenuItem>

                {/* Create new customer */}
                <DropdownMenuItem asChild>
                    <Link to="customers">
                        <Users size={18} />
                        مشتری جدید
                    </Link>
                </DropdownMenuItem>

                {/* Create new order */}
                <DropdownMenuItem asChild>
                    <Link to="orders">
                        <ShoppingCart size={18} />
                        سفارش جدید
                    </Link>
                </DropdownMenuItem>

                {/* Create new discount coupon */}
                <DropdownMenuItem asChild>
                    <Link to="coupons">
                        <Ticket size={18} />
                        کد تخفیف جدید
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default QuickActions;
