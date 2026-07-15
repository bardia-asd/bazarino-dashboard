import { Search } from "lucide-react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
} from "@/components/common/Dialog";
import Input from "@/components/common/form/Input";
import Button from "@/components/common/Button";

/**
 * Global search component.
 *
 * Displays a search button in the header that
 * opens a dialog containing a search input.
 */
const GlobalSearch = () => {
    return (
        <Dialog>
            {/* Trigger button that opens the search dialog */}
            <DialogTrigger asChild>
                <Button
                    variant="secondary"
                    radius="full"
                    className="sm:justify-between w-9 sm:w-full">
                    <span className="flex items-center gap-2">
                        <span>
                            <Search size={18} />
                        </span>

                        <span className="hidden sm:inline text-sm text-muted-foreground">
                            جستجوی سفارش, محصول, مشتری...
                        </span>
                    </span>

                    {/* Keyboard shortcut hint */}
                    <kbd className="hidden md:inline text-[10px] text-muted-foreground bg-background/60 px-1.5 py-0.5 border border-border rounded-full">
                        Ctrl + K
                    </kbd>
                </Button>
            </DialogTrigger>

            {/* Search dialog */}
            <DialogContent>
                <DialogHeader className="mb-4">جستجو</DialogHeader>

                {/* Search input field */}
                <Input
                    startIcon={<Search size={18} />}
                    placeholder=" جستجوی سفارش, محصول, مشتری..."
                />
            </DialogContent>
        </Dialog>
    );
};

export default GlobalSearch;
