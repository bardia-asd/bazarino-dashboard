import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "./components/common/Popover";
import Button from "./components/common/Button";

const App = () => {
    return (
        <div className="p-5">
            <Popover>
                <div className="flex items-center gap-2">
                    <PopoverTrigger asChild>
                        <Button variant="outline">اطلاعات بیشتر</Button>
                    </PopoverTrigger>
                </div>

                <PopoverContent>
                    <h4 className="mb-2 font-medium">راهنما</h4>

                    <p className="text-sm text-muted-foreground">
                        این Popover با استفاده از Radix UI ساخته شده است و به
                        کمک
                        <code>PopoverAnchor</code> در کنار آیکون قرار می‌گیرد.
                    </p>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default App;
