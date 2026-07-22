import { ProductProvider } from "@/features/products/context/ProductContext";
import StatGrid from "./components/StatGrid";
import PageHeader from "@/components/layout/PageHeader";
import ProductsTable from "@/features/products/components/ProductsTable";
import AddProductDrawer from "@/features/products/components/AddProductDrawer";
import EditProductDrawer from "@/features/products/components/EditProductDrawer";
import DeleteProductDialog from "@/features/products/components/DeleteProductDialog";

const Products = () => {
    return (
        <ProductProvider>
            <div className="space-y-5">
                {/* Page title, description, and product creation action */}
                <PageHeader
                    title="محصولات"
                    description="مدیریت کاتالوگ، قیمت‌گذاری، موجودی و انتشار محصولات"
                    actions={<AddProductDrawer />}
                />

                {/* Product overview statistics */}
                <StatGrid />

                {/* Products data table */}
                <section>
                    <ProductsTable />
                </section>

                {/* Product management dialogs */}
                <EditProductDrawer />
                <DeleteProductDialog />
            </div>
        </ProductProvider>
    );
};

export default Products;
