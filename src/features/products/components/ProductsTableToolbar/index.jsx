import { Search } from "lucide-react";
import { useProductContext } from "@/features/products/context/ProductContext";
import Button from "@/components/common/Button";
import Input from "@/components/common/form/Input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/common/form/Select";
import {
    PRODUCT_CATEGORY_FILTERS,
    PRODUCT_STATUS_FILTERS,
} from "@/features/products/constant/productOptions";

const ProductsTableToolbar = () => {
    const { filters, updateFilter, clearFilters } = useProductContext();

    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full p-4">
            {/* Product search input */}
            <div className="flex-1 sm:max-w-sm">
                <Input
                    placeholder="جستجو در محصولات، SKU..."
                    radius="full"
                    startIcon={<Search size={16} />}
                    className="text-sm"
                    value={filters.search}
                    onChange={(e) => updateFilter("search", e.target.value)}
                />
            </div>

            {/* Product filters */}
            <div className="flex flex-wrap items-center gap-2">
                {/* Category filter */}
                <Select
                    dir="rtl"
                    value={filters.category}
                    onValueChange={(value) => updateFilter("category", value)}>
                    <SelectTrigger className="w-36 rounded-full">
                        <SelectValue placeholder="دسته‌بندی" />
                    </SelectTrigger>

                    <SelectContent>
                        {PRODUCT_CATEGORY_FILTERS.map((category) => (
                            <SelectItem
                                key={category.label}
                                value={category.value}>
                                {category.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                {/* Product status filter */}
                <Select
                    dir="rtl"
                    value={filters.status}
                    onValueChange={(value) => updateFilter("status", value)}>
                    <SelectTrigger className="w-36 rounded-full">
                        <SelectValue placeholder="وضعیت" />
                    </SelectTrigger>

                    <SelectContent>
                        {PRODUCT_STATUS_FILTERS.map((status) => (
                            <SelectItem key={status.label} value={status.value}>
                                {status.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default ProductsTableToolbar;
