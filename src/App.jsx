import { Mail, Plus, Search } from "lucide-react";
import Input from "./components/common/form/Input";
import Label from "./components/common/form/Label";

const App = () => {
    return (
        <div className="min-h-screen font-vazirmatn text-foreground bg-background">
            <div className="p-5 space-y-8">
                <Label>ایمیل:</Label>
                <Input
                    id="disabled"
                    placeholder="you@example.com"
                    size="sm"
                    disabled
                />
                <Input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    size="md"
                    endIcon={<Mail size={16} />}
                />
                <Input
                    id="search"
                    placeholder="you@example.com"
                    size="lg"
                    invalid
                    startIcon={<Search size={16} />}
                />
            </div>
        </div>
    );
};

export default App;
