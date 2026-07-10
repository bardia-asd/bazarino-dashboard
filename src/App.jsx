import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "./components/common/AlertDialog";

import Button from "./components/common/Button";

const App = () => {
    const handleDelete = () => {
        console.log("آیتم حذف شد");
    };
    return (
        <div className="p-5">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive">حذف تراکنش</Button>
                </AlertDialogTrigger>

                <AlertDialogContent dir="rtl">
                    <AlertDialogHeader>
                        <AlertDialogTitle>حذف تراکنش</AlertDialogTitle>

                        <AlertDialogDescription>
                            آیا از حذف این تراکنش مطمئن هستید؟ این عملیات قابل
                            بازگشت نیست و اطلاعات برای همیشه حذف خواهد شد.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel>انصراف</AlertDialogCancel>

                        <AlertDialogAction onClick={handleDelete}>
                            حذف
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default App;
