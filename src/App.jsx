import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./components/common/Card";
import Button from "./components/common/Button";
import Spinner from "./components/common/Spinner";

const App = () => {
    return (
        <div className="min-h-screen font-vazirmatn text-foreground bg-background">
            <div className="p-5 flex gap-5">
                <Spinner />
                <Spinner size="md" />
                <Spinner size="lg" />
            </div>
        </div>
    );
};

export default App;
