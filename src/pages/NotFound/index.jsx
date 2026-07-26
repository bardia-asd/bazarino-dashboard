import { FileSearch } from "lucide-react";
import Button from "@/components/common/Button";
import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
            <div className="flex size-20 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <FileSearch size={40} strokeWidth={1.75} />
            </div>

            <span className="mt-6 text-sm font-medium text-primary">
                خطای 404
            </span>

            <h1 className="mt-2 text-3xl font-bold tracking-tight">
                صفحه پیدا نشد
            </h1>

            <p className="mt-3 max-w-md text-sm text-muted-foreground">
                صفحه‌ای که به دنبال آن هستید وجود ندارد، منتقل شده است یا ممکن
                است آدرس وارد شده نادرست باشد.
            </p>

            <Button asChild radius="full" className="mt-8">
                <Link to="/dashboard">بازگشت به داشبورد</Link>
            </Button>
        </div>
    );
};

export default NotFound;
