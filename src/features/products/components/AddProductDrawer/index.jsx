import { Plus, X } from "lucide-react";
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
import { useProductContext } from "@/features/products/context/ProductContext";
import { useState } from "react";

/**
 * Add product drawer.
 *
 * Displays a drawer containing the product form
 * for creating a new product.
 */
const AddProductDrawer = () => {
    const [open, setOpen] = useState(false);
    const { mutationLoading, addProduct } = useProductContext();

    // Create a new product and close the drawer on success
    const handleCreate = async (product) => {
        await addProduct(product);
        setOpen(false);
    };

    return (
        <Drawer direction="right" open={open} onOpenChange={setOpen}>
            {/* Drawer trigger */}
            <DrawerTrigger asChild>
                <Button className="text-sm" radius="full">
                    <Plus size={16} />
                    افزودن محصول
                </Button>
            </DrawerTrigger>

            <DrawerContent className="sm:w-lg p-0">
                {/* Drawer header */}
                <DrawerHeader className="flex-row items-start justify-between bg-muted/30 p-5 border-b border-border">
                    <div>
                        <DrawerTitle className="text-right">
                            افزودن محصول جدید
                        </DrawerTitle>

                        <DrawerDescription className="text-xs text-right">
                            اطلاعات محصول را وارد کنید تا به فهرست محصولات اضافه
                            شود.
                        </DrawerDescription>
                    </div>

                    {/* Close drawer button */}
                    <DrawerClose asChild>
                        <Button variant="secondary" className="size-6 p-0">
                            <X size={16} />
                        </Button>
                    </DrawerClose>
                </DrawerHeader>

                {/* Product creation form */}
                <ProductForm
                    loading={mutationLoading}
                    onSubmit={handleCreate}
                />
            </DrawerContent>
        </Drawer>
    );
};

export default AddProductDrawer;
