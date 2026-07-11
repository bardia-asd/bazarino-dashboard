import Button from "./components/common/Button";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "./components/common/form/Select";

const App = () => {
    const [value, setValue] = useState("");

    return (
        <div className="p-5 flex gap-10">
            <Select value={value} onValueChange={setValue} dir="rtl">
                <SelectTrigger className="w-64">
                    <SelectValue placeholder="یک دسته‌بندی انتخاب کنید" />
                </SelectTrigger>

                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>میوه‌ها</SelectLabel>

                        <SelectItem value="apple">سیب</SelectItem>

                        <SelectItem value="banana">موز</SelectItem>

                        <SelectItem value="orange">پرتقال</SelectItem>
                    </SelectGroup>

                    <SelectSeparator />

                    <SelectGroup>
                        <SelectLabel>نوشیدنی‌ها</SelectLabel>

                        <SelectItem value="coffee">قهوه</SelectItem>

                        <SelectItem value="tea">چای</SelectItem>

                        <SelectItem value="juice">آبمیوه</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default App;
