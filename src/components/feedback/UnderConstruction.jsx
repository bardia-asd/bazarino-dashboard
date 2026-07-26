import { Construction } from "lucide-react";

const UnderConstruction = () => {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="flex items-center justify-center size-20 rounded-full bg-warning/10 text-warning">
                <Construction size={40} strokeWidth={1.75} />
            </div>

            <h2 className="mt-6 text-2xl font-bold">در حال توسعه</h2>

            <p className="mt-2 max-w-md text-sm text-muted-foreground">
                این صفحه در حال حاضر در دست توسعه است و در به‌روزرسانی‌های آینده
                در دسترس خواهد بود.
            </p>
        </div>
    );
};

export default UnderConstruction;
