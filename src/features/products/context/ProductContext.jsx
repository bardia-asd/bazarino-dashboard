import { createContext, useContext, useState } from "react";
import { useProducts } from "../hooks/useProducts";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [filters, setFilters] = useState({
        search: "",
        status: "all",
        category: "all",
    });

    const products = useProducts(filters);

    const openEditDrawer = (product) => {
        setSelectedProduct(product);
        setEditOpen(true);
    };

    const closeEditDrawer = () => {
        setEditOpen(false);
        setSelectedProduct(null);
    };

    const openDeleteDialog = (product) => {
        setSelectedProduct(product);
        setDeleteOpen(true);
    };

    const closeDeleteDialog = () => {
        setDeleteOpen(false);
        setSelectedProduct(null);
    };

    const updateFilter = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const clearFilters = () => {
        setFilters({
            search: "",
            status: "all",
            category: "all",
        });
    };

    return (
        <ProductContext.Provider
            value={{
                ...products,

                selectedProduct,
                editOpen,
                deleteOpen,
                filters,

                openEditDrawer,
                closeEditDrawer,

                openDeleteDialog,
                closeDeleteDialog,

                updateFilter,
                clearFilters,
            }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error(
            "useProductContext must be used within a ProductProvider",
        );
    }

    return context;
};
