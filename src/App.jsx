import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "./components/common/DropdownMenu";
import Button from "./components/common/Button";
import { useState } from "react";

const App = () => {
    const [notification, setNotification] = useState(true);
    const [theme, setTheme] = useState("dark");

    return (
        <div className="p-5 flex gap-10">
            <DropdownMenu dir="rtl">
                <DropdownMenuTrigger asChild>
                    <Button>حساب کاربری</Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuLabel>حساب من</DropdownMenuLabel>

                    <DropdownMenuSeparator />

                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            پروفایل
                            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            تنظیمات
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        خروج
                        <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu dir="rtl">
                <DropdownMenuTrigger asChild>
                    <Button>تنظیمات</Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuLabel>تنظیمات برنامه</DropdownMenuLabel>

                    <DropdownMenuSeparator />

                    <DropdownMenuCheckboxItem
                        checked={notification}
                        onCheckedChange={setNotification}>
                        اعلان‌ها
                    </DropdownMenuCheckboxItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuRadioGroup
                        value={theme}
                        onValueChange={setTheme}>
                        <DropdownMenuRadioItem value="light">
                            روشن
                        </DropdownMenuRadioItem>

                        <DropdownMenuRadioItem value="dark">
                            تیره
                        </DropdownMenuRadioItem>

                        <DropdownMenuRadioItem value="system">
                            سیستم
                        </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu dir="rtl">
                <DropdownMenuTrigger asChild>
                    <Button>اشتراک‌گذاری</Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem>کپی لینک</DropdownMenuItem>

                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            اشتراک‌گذاری
                        </DropdownMenuSubTrigger>

                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>تلگرام</DropdownMenuItem>

                                <DropdownMenuItem>واتساپ</DropdownMenuItem>

                                <DropdownMenuItem>ایمیل</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default App;
