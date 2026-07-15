import { Store } from "lucide-react";
import {
    Avatar,
    AvatarFallback,
} from "@/components/common/Avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/common/DropdownMenu";
import Button from "@/components/common/Button";

/**
 * Store switcher component.
 *
 * Displays the currently selected store and
 * allows users to switch between available stores.
 */
const StoreSwitcher = () => {
    return (
        <DropdownMenu dir="rtl">
            {/* Store selector trigger */}
            <DropdownMenuTrigger asChild>
                <Button
                    radius="full"
                    variant="ghost"
                    className="gap-2 px-1.5 sm:px-3 h-10">
                    <Avatar className="bg-primary/10 text-primary size-7">
                        <AvatarFallback>
                            <Store size={16} />
                        </AvatarFallback>
                    </Avatar>

                    {/* Current store information */}
                    <div className="hidden lg:flex flex-col">
                        <span className="text-[10px] text-muted-foreground">
                            فروشگاه
                        </span>

                        <span className="text-xs font-semibold">
                            بازار مرکزی
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>

            {/* Store list */}
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>انتخاب فروشگاه</DropdownMenuLabel>

                <DropdownMenuItem>بازار مرکزی</DropdownMenuItem>
                <DropdownMenuItem>شعبه تهران</DropdownMenuItem>
                <DropdownMenuItem>شعبه اصفهان</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default StoreSwitcher;
