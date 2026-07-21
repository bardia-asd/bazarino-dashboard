import PageHeader from "@/components/layout/PageHeader";
import StatGrid from "./components/StatGrid";
import ProductsTable from "@/features/products/components/ProductsTable";

const Products = () => {
    return (
        <div className="space-y-5">
            <PageHeader
                title="محصولات"
                description="مدیریت کاتالوگ، قیمت‌گذاری، موجودی و انتشار محصولات"
            />

            <StatGrid />

            <section>
                <ProductsTable />
            </section>
        </div>
    );
};

export default Products;
