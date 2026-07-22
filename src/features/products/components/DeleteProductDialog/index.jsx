import { TriangleAlert } from "lucide-react";
import { useProductContext } from "@/features/products/context/ProductContext";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/common/AlertDialog";

const DeleteProductDialog = () => {
    const {
        mutationLoading,
        deleteProduct,
        selectedProduct,
        deleteOpen,
        closeDeleteDialog,
        clearFilters,
    } = useProductContext();

    // Handles product deletion after user confirmation
    const handleDelete = async (event) => {
        event.preventDefault();

        // Prevent deletion if no product is selected
        if (!selectedProduct) return;

        await deleteProduct(selectedProduct.id);
        clearFilters();

        // Close dialog after successful deletion
        closeDeleteDialog();
    };

    // Do not render dialog without a selected product
    if (!selectedProduct) return null;

    return (
        <AlertDialog
            open={deleteOpen}
            onOpenChange={(open) => {
                // Close dialog when user dismisses it
                if (!open) closeDeleteDialog();
            }}>
            <AlertDialogContent className="flex flex-col gap-4">
                {/* Dialog header and warning message */}
                <AlertDialogHeader className="items-center gap-2 text-center">
                    {/* Warning icon */}
                    <div className="flex items-center justify-center size-12 text-danger bg-danger/10 rounded-full">
                        <TriangleAlert />
                    </div>

                    {/* Dialog title */}
                    <AlertDialogTitle className="text-base">
                        حذف محصول
                    </AlertDialogTitle>

                    {/* Delete confirmation description */}
                    <AlertDialogDescription className="text-center">
                        با حذف این محصول، تمامی داده‌های مرتبط با آن از جمله
                        موجودی، تصاویر و دیدگاه‌ها حذف خواهد شد. این عملیات
                        غیرقابل بازگشت است.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                {/* Selected product preview */}
                <div className="px-3 py-2.5 border border-border rounded-xl bg-muted/60 text-center">
                    <span className="text-[10px] text-muted-foreground">
                        محصول انتخاب شده
                    </span>

                    <p className="mt-0.5 text-sm truncate">
                        {selectedProduct.product_name}
                    </p>
                </div>

                {/* Confirmation actions */}
                <AlertDialogFooter>
                    {/* Confirm deletion */}
                    <AlertDialogAction
                        className="sm:flex-1 rounded-full"
                        size="lg"
                        onClick={handleDelete}>
                        حذف
                    </AlertDialogAction>

                    {/* Cancel deletion */}
                    <AlertDialogCancel
                        className="sm:flex-1 rounded-full"
                        size="lg">
                        انصراف
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteProductDialog;
