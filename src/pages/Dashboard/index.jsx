import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/common/Button";

const Dashboard = () => {
    return (
        <div className="space-y-5">
            <PageHeader
                title="سلام، بردیا"
                description="نمای کلی عملکرد فروشگاه در ۷ روز گذشته"
                actions={
                    <>
                        <Button size="sm" radius="full" variant="outline">
                            بازه: ۷ روز اخیر
                        </Button>
                        <Button size="sm" radius="full" variant="outline">
                            خروجی گزارش
                        </Button>
                        <Button radius="full" size="sm">
                            افزودن محصول
                        </Button>
                    </>
                }
            />
        </div>
    );
};

export default Dashboard;
