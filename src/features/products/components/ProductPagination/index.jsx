import { useProductContext } from "@/features/products/context/ProductContext";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/common/Pagination";

const ProductPagination = () => {
    const { pagination, totalCount, changePage } = useProductContext();

    // Calculate total number of pages
    const totalPages = Math.ceil(totalCount / pagination.pageSize);

    // Hide pagination when all products fit on a single page
    if (totalPages <= 1) return null;

    return (
        <Pagination>
            <PaginationContent>
                {/* Previous page button */}
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => changePage(pagination.page - 1)}
                        disabled={pagination.page === 1}
                    />
                </PaginationItem>

                {/* Page number links */}
                {Array.from({ length: totalPages }).map((_, i) => {
                    const page = i + 1;

                    return (
                        <PaginationItem key={page}>
                            <PaginationLink
                                isActive={page === pagination.page}
                                onClick={() => changePage(page)}>
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}

                {/* Next page button */}
                <PaginationItem>
                    <PaginationNext
                        onClick={() => changePage(pagination.page + 1)}
                        disabled={pagination.page === totalPages}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default ProductPagination;
