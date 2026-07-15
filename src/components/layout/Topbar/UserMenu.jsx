import Button from "@/components/common/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/common/DropdownMenu";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/common/Avatar";

/**
 * User menu component.
 *
 * Displays the current user's information
 * and provides quick access to account actions.
 */
const UserMenu = () => {
    return (
        <DropdownMenu dir="rtl">
            {/* Dropdown trigger */}
            <DropdownMenuTrigger asChild>
                <Button
                    radius="full"
                    variant="ghost"
                    className="gap-2 px-1.5 sm:px-3 h-10">
                    {/* User avatar */}
                    <Avatar className="bg-primary/10 text-primary size-8 text-sm">
                        <AvatarImage
                            src="https://picsum.photos/100"
                            alt="User avatar"
                        />
                        <AvatarFallback>ب‌ا</AvatarFallback>
                    </Avatar>

                    {/* User information */}
                    <div className="hidden lg:flex flex-col">
                        <span className="text-[10px] text-muted-foreground">
                            بردیا اسدی
                        </span>

                        <span className="text-xs font-semibold">مدیر ارشد</span>
                    </div>
                </Button>
            </DropdownMenuTrigger>

            {/* User actions menu */}
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>حساب کاربری</DropdownMenuLabel>

                {/* Profile page */}
                <DropdownMenuItem>پروفایل</DropdownMenuItem>

                {/* Account settings */}
                <DropdownMenuItem>تنظیمات حساب</DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Sign out */}
                <DropdownMenuItem className="text-danger">
                    خروج
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserMenu;
