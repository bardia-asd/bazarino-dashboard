import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./components/common/Dialog";
import Button from "./components/common/Button";

const App = () => {
    return (
        <div className="min-h-screen font-vazirmatn text-foreground bg-background p-5">
            <Dialog>
                <DialogTrigger asChild>
                    <Button>باز کردن پنجره</Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>ویرایش پروفایل</DialogTitle>

                        <DialogDescription>
                            اطلاعات پروفایل خود را از این بخش ویرایش کنید.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="py-4">
                        <p className="text-sm text-muted-foreground">
                            فرم یا محتوای موردنظر خود را در این قسمت قرار دهید.
                        </p>
                    </div>

                    <DialogFooter>
                        <Button>ذخیره تغییرات</Button>

                        <DialogClose asChild>
                            <Button variant="outline">انصراف</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default App;
