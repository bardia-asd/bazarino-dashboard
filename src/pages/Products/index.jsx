import PageHeader from "@/components/layout/PageHeader";
import StatGrid from "./components/StatGrid";
import ProductsTable from "@/features/products/components/ProductsTable";
import AddProductDrawer from "@/features/products/components/AddProductDrawer";
import { ProductProvider } from "@/features/products/context/ProductContext";

const Products = () => {
    return (
        <ProductProvider>
            <div className="space-y-5">
                <PageHeader
                    title="محصولات"
                    description="مدیریت کاتالوگ، قیمت‌گذاری، موجودی و انتشار محصولات"
                    actions={<AddProductDrawer />}
                />

                <StatGrid />

                <section>
                    <ProductsTable />
                </section>
            </div>
        </ProductProvider>
    );
};

export default Products;
