import PageHeader from "@/components/layout/PageHeader";
import StatGrid from "./components/StatGrid";

const Products = () => {
    return (
        <div className="space-y-5">
            <PageHeader
                title="محصولات"
                description="مدیریت کاتالوگ، قیمت‌گذاری، موجودی و انتشار محصولات"
            />

            <StatGrid />
        </div>
    );
};

export default Products;
