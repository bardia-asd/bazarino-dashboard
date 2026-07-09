import Badge from "./components/common/Badge";

const App = () => {
    return (
        <div className="min-h-screen font-vazirmatn text-foreground bg-background">
            <div className="flex gap-8 p-5">
                <Badge >ارسال شده</Badge>
                <Badge variant="secondary">لغو شده</Badge>
                <Badge variant="success">تحویل شده</Badge>
                <Badge variant="destructive">مرجوعی</Badge>
                <Badge variant="warning">در حال آماده‌سازی</Badge>
                <Badge variant="info">پرداخت شده</Badge>
            </div>
        </div>
    );
};

export default App;
