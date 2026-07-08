import { Plus } from "lucide-react";
import Button from "./components/common/Button";

const App = () => {
    return (
        <div className="min-h-screen font-vazirmatn text-foreground bg-background">
            <div className="p-5 space-y-8">
                <div className="flex gap-5">
                    <Button>اصلی</Button>
                    <Button variant="secondary" fullWidth>ثانویه</Button>
                    <Button variant="outline">حاشیه دار</Button>
                    <Button variant="ghost">شبح</Button>
                    <Button variant="destructive">حذف</Button>
                    <Button variant="link">لینک</Button>
                </div>
                <div className="flex gap-5">
                    <Button size="sm">کوچک</Button>
                    <Button size="md">متوسط</Button>
                    <Button size="lg">بزرگ</Button>
                    <Button size="icon">
                        <Plus size={18} />
                    </Button>
                </div>
                <div className="flex gap-5">
                    <Button radius="sm">کوچک</Button>
                    <Button radius="md">متوسط</Button>
                    <Button radius="lg">بزرگ</Button>
                    <Button radius="full">کامل</Button>
                </div>
            </div>
        </div>
    );
};

export default App;
