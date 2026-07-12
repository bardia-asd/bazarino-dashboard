import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "./components/common/Tooltip";
import Button from "./components/common/Button";
import { Info } from "lucide-react";

const App = () => {
    return (
        <div className="p-5">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">
                            <Info className="size-4" />
                            راهنما
                        </Button>
                    </TooltipTrigger>

                    <TooltipContent>
                        <p>برای مشاهده جزئیات بیشتر، روی دکمه کلیک کنید.</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
};

export default App;
