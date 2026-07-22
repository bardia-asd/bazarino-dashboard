import { useEffect } from "react";
import { X } from "lucide-react";
import { useProductContext } from "@/features/products/context/ProductContext";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/common/Drawer";
import Button from "@/components/common/Button";
import ProductForm from "../ProductForm";

/**
 * Edit product drawer.
 *
 * Displays a drawer containing the product form
 * for updating the currently selected product.
 */
const EditProductDrawer = () => {
    const {
        mutationLoading,
        updateProduct,
        selectedProduct,
        editOpen,
        closeEditDrawer,
        clearFilters
    } = useProductContext();

    // Update the selected product and close the drawer on success
    const handleUpdate = async (updates) => {
        if (!selectedProduct) return;

        await updateProduct(selectedProduct.id, updates);
        clearFilters();
        closeEditDrawer();
    };

    return (
        <Drawer
            direction="right"
            open={editOpen}
            onOpenChange={(open) => {
                if (!open) closeEditDrawer();
            }}>
            <DrawerContent className="sm:w-lg p-0">
                {/* Drawer header */}
                <DrawerHeader className="flex-row items-start justify-between bg-muted/30 p-5 border-b border-border">
                    <div>
                        <DrawerTitle className="text-right">
                            ویرایش محصول
                        </DrawerTitle>

                        <DrawerDescription className="text-xs text-right">
                            اطلاعات محصول را ویرایش کرده و تغییرات را ذخیره
                            کنید.
                        </DrawerDescription>
                    </div>

                    {/* Close drawer button */}
                    <DrawerClose asChild>
                        <Button variant="secondary" className="size-6 p-0">
                            <X size={16} />
                        </Button>
                    </DrawerClose>
                </DrawerHeader>

                {/* Product edit form */}
                <ProductForm
                    defaultValues={selectedProduct}
                    loading={mutationLoading}
                    onSubmit={handleUpdate}
                />
            </DrawerContent>
        </Drawer>
    );
};

export default EditProductDrawer;
