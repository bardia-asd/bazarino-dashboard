import { Mail, Plus, Search } from "lucide-react";
import Input from "./components/common/form/Input";
import Label from "./components/common/form/Label";
import Field from "./components/common/form/Field";
import Textarea from "./components/common/form/Textarea";

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

                <Field>
                    <Label htmlFor="note">توضیحات</Label>
                    <Textarea id="note" rows={5}/>
                </Field>
            </div>
        </div>
    );
};

export default App;
