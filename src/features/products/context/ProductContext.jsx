import { createContext, useContext, useState } from "react";
import { useProducts } from "../hooks/useProducts";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [editOpen, setEditOpen] = useState(false);

    const products = useProducts();

    const openEditDrawer = (product) => {
        setSelectedProduct(product);
        setEditOpen(true);
    };

    const closeEditDrawer = () => {
        setEditOpen(false);
        setSelectedProduct(null);
    };

    return (
        <ProductContext.Provider
            value={{
                ...products,
                selectedProduct,
                editOpen,
                openEditDrawer,
                closeEditDrawer,
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
