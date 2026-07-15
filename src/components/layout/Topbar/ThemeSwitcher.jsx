import { useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/components/common/DropdownMenu";
import Button from "@/components/common/Button";

/**
 * Theme switcher component.
 *
 * Displays a dropdown menu that allows
 * users to switch between light, dark,
 * and system theme preferences.
 */
const ThemeSwitcher = () => {
    const [theme, setTheme] = useState("dark");

    return (
        <DropdownMenu dir="rtl">
            {/* Dropdown trigger */}
            <DropdownMenuTrigger>
                <Button
                    size="icon"
                    variant="ghost"
                    radius="lg"
                    aria-label="تغییر تم">
                    <Monitor size={16} />
                </Button>
            </DropdownMenuTrigger>

            {/* Theme selection menu */}
            <DropdownMenuContent>
                <DropdownMenuLabel>تم</DropdownMenuLabel>

                {/* Available theme options */}
                <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                    <DropdownMenuRadioItem value="light">
                        <Sun size={16} />
                        روشن
                    </DropdownMenuRadioItem>

                    <DropdownMenuRadioItem value="dark">
                        <Moon size={16} />
                        تاریک
                    </DropdownMenuRadioItem>

                    <DropdownMenuRadioItem value="system">
                        <Monitor size={16} />
                        سیستم
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ThemeSwitcher;
