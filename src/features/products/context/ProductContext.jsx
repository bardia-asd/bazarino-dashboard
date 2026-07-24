import { createContext, useContext, useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";

const ProductContext = createContext();

/**
 * Provides product data, CRUD actions, filters,
 * pagination, and UI state for the products module.
 */
export const ProductProvider = ({ children }) => {
    // Currently selected product for edit/delete actions
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Drawer and dialog visibility state
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    // Product table filters
    const [filters, setFilters] = useState({
        search: "",
        status: "all",
        category: "all",
    });

    // Pagination state
    const [pagination, setPagination] = useState({
        page: 1,
        pageSize: 7,
    });

    // Product data and CRUD operations
    const products = useProducts(filters, pagination);

    // Reset to the first page whenever filters change
    useEffect(() => {
        setPagination((prev) => ({
            ...prev,
            page: 1,
        }));
    }, [filters]);

    // Opens the edit drawer for a product
    const openEditDrawer = (product) => {
        setSelectedProduct(product);
        setEditOpen(true);
    };

    // Closes the edit drawer and clears the selection
    const closeEditDrawer = () => {
        setEditOpen(false);
        setSelectedProduct(null);
    };

    // Opens the delete confirmation dialog
    const openDeleteDialog = (product) => {
        setSelectedProduct(product);
        setDeleteOpen(true);
    };

    // Closes the delete dialog and clears the selection
    const closeDeleteDialog = () => {
        setDeleteOpen(false);
        setSelectedProduct(null);
    };

    // Updates a single filter value
    const updateFilter = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    // Restores all filters to their default values
    const clearFilters = () => {
        setFilters({
            search: "",
            status: "all",
            category: "all",
        });
    };

    // Changes the current page
    const changePage = (page) => setPagination((prev) => ({ ...prev, page }));

    return (
        <ProductContext.Provider
            value={{
                // Product data and actions
                ...products,

                // Selected product and UI state
                selectedProduct,
                editOpen,
                deleteOpen,
                filters,

                // Pagination state and actions
                pagination,
                setPagination,
                changePage,

                // Edit drawer controls
                openEditDrawer,
                closeEditDrawer,

                // Delete dialog controls
                openDeleteDialog,
                closeDeleteDialog,

                // Filter actions
                updateFilter,
                clearFilters,
            }}>
            {children}
        </ProductContext.Provider>
    );
};

/**
 * Accesses the product context.
 */
export const useProductContext = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error(
            "useProductContext must be used within a ProductProvider",
        );
    }

    return context;
};
