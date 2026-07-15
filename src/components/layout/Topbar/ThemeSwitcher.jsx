/**
 * Theme icons mapped to their
 * corresponding theme values.
 */
const icons = {
    light: Sun,
    dark: Moon,
    system: Monitor,
};

/**
 * Theme switcher component.
 *
 * Displays the current theme icon
 * and allows users to switch between
 * light, dark, and system themes.
 */
const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    // Resolve the icon for the active theme.
    const ThemeIcon = icons[theme];

    return (
        <DropdownMenu dir="rtl">
            {/* Theme switcher trigger */}
            <DropdownMenuTrigger asChild>
                <Button
                    size="icon"
                    variant="ghost"
                    radius="lg"
                    aria-label="تغییر تم">
                    <ThemeIcon size={16} />
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
