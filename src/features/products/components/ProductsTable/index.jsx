import { useProductContext } from "@/features/products/context/ProductContext";
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/common/Card";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/common/Table";
import TableSkeleton from "@/components/common/Table/TableSkeleton";
import TableError from "@/components/common/Table/TableError";
import TableEmpty from "@/components/common/Table/TableEmpty";
import ProductTableRow from "./ProductTableRow";
import ProductsTableToolbar from "../ProductsTableToolbar";

/**
 * Products table.
 *
 * Displays the product list with loading,
 * error, and empty states, along with
 * search and management actions.
 */
const ProductsTable = () => {
    const {
        products,
        fetchLoading,
        error,
        refetch,
        updateProduct,
        deleteProduct,
    } = useProductContext();

    return (
        <Card>
            <CardContent className="p-0">
                <ProductsTableToolbar />

                {/* Loading state */}
                {fetchLoading && <TableSkeleton />}

                {/* Error state */}
                {!fetchLoading && error && (
                    <TableError message={error} onRetry={refetch} />
                )}

                {/* Empty state */}
                {!fetchLoading && !error && products.length === 0 && (
                    <TableEmpty
                        title="محصولی یافت نشد"
                        description="هنوز محصولی ثبت نشده یا نتیجه‌ای با فیلترهای انتخاب‌شده وجود ندارد."
                    />
                )}

                {/* Products table */}
                {!fetchLoading && !error && products.length > 0 && (
                    <Table>
                        <TableHeader>
                            <TableRow className="text-xs">
                                <TableHead>محصول</TableHead>
                                <TableHead>SKU</TableHead>
                                <TableHead>دسته / برند</TableHead>
                                <TableHead>قیمت</TableHead>
                                <TableHead>موجودی</TableHead>
                                <TableHead>وضعیت</TableHead>
                                <TableHead>فروشنده</TableHead>
                                <TableHead>فروش</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {products.map((product) => (
                                <ProductTableRow
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </TableBody>
                    </Table>
                )}
            </CardContent>

            {/* Table footer */}
            <CardFooter></CardFooter>
        </Card>
    );
};

export default ProductsTable;
