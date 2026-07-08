import { Mail, Plus, Search } from "lucide-react";
import Input from "./components/common/form/Input";
import Label from "./components/common/form/Label";
import Field from "./components/common/form/Field";

const App = () => {
    return (
        <div className="min-h-screen font-vazirmatn text-foreground bg-background">
            <div className="p-5 space-y-8">
                <Field>
                    <Label htmlFor="disabled">غیرفعال:</Label>
                    <Input
                        id="disabled"
                        placeholder="you@example.com"
                        size="sm"
                        disabled
                    />
                </Field>

                <Field>
                    <Label htmlFor="email">ایمیل</Label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="you@example.com"
                        size="md"
                        endIcon={<Mail size={16} />}
                    />
                </Field>

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
