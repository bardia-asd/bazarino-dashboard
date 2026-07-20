import { Link } from "react-router";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/common/Card";
import Button from "@/components/common/Button";
import { useTopSellingProducts } from "@/features/products/hooks/useTopSellingProducts";
import TopSellingProductsItem from "./TopSellingProductsItem";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import EmptyState from "./EmptyState";

/**
 * Top selling products component.
 *
 * Displays a list of the best-performing products
 * with loading, error, and empty states.
 */
const TopSellingProducts = () => {
    const { products, loading, error, refetch } = useTopSellingProducts();

    return (
        <Card className="xl:col-span-2">
            <CardHeader className="items-end">
                {/* Section title */}
                <div>
                    <CardTitle>پرفروش‌ترین محصولات</CardTitle>
                </div>

                {/* Navigate to full products report */}
                <Button as={Link} to="products" variant="ghost" size="sm">
                    گزارش کامل
                </Button>
            </CardHeader>

            <CardContent className="space-y-2">
                {/* Loading state */}
                {loading && <LoadingState />}

                {/* Error state with retry action */}
                {error && <ErrorState onRetry={refetch} />}

                {/* Empty state when no products exist */}
                {!loading && !error && products.length === 0 && (
                    <EmptyState
                        title="محصولی وجود ندارد"
                        description="هنوز هیچ فروش محصولی ثبت نشده است"
                    />
                )}

                {/* Product list */}
                {!loading &&
                    !error &&
                    products.length > 0 &&
                    products.map((product) => (
                        <TopSellingProductsItem
                            key={product.id}
                            product={product}
                        />
                    ))}
            </CardContent>
        </Card>
    );
};

export default TopSellingProducts;
