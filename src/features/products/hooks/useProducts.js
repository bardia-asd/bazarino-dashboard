import { useCallback, useEffect, useState } from "react";
import { toast } from "@/components/common/Toast";
import {
    createProduct,
    getProducts,
    deleteProduct as deleteProductService,
    updateProduct as updateProductService,
} from "../services/productService";
import { useProductContext } from "../context/ProductContext";

/**
 * Custom hook for managing products.
 *
 * Handles:
 * - Fetching products
 * - Creating products
 * - Updating products
 * - Deleting products
 * - Managing loading and error states
 */
export const useProducts = (filters, pagination) => {
    // Products list state
    const [products, setProducts] = useState([]);

    // Loading state for initial data fetching
    const [fetchLoading, setFetchLoading] = useState(false);

    // Loading state for create/update/delete operations
    const [mutationLoading, setMutationLoading] = useState(false);

    // Stores request errors
    const [error, setError] = useState(null);

    const [totalCount, setTotalCount] = useState(0);

    /**
     * Fetch all products from database.
     */
    const fetchProducts = useCallback(async () => {
        setFetchLoading(true);

        try {
            const result = await getProducts(filters, pagination);

            setProducts(result.products);
            setTotalCount(result.count);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setFetchLoading(false);
        }
    }, [filters, pagination]);

    // Fetch products when component using this hook mounts
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    /**
     * Create a new product.
     *
     * Updates local state optimistically
     * after successful creation.
     */
    const addProduct = async (product) => {
        setMutationLoading(true);

        try {
            const newProduct = await createProduct(product);

            // Add new product to the beginning of the list
            setProducts((prev) => [newProduct, ...prev]);
            setTotalCount((prev) => prev + 1);

            toast.success("محصول ایجاد شد");
            setError(null);

            return newProduct;
        } catch (error) {
            toast.error(error.message);
            throw error;
        } finally {
            setMutationLoading(false);
        }
    };

    /**
     * Update an existing product.
     *
     * Replaces the updated item in local state
     * without requiring another fetch.
     */
    const updateProduct = async (id, updates) => {
        setMutationLoading(true);

        try {
            const updatedProduct = await updateProductService(id, updates);

            setProducts((prev) =>
                prev.map((product) =>
                    product.id === id ? updatedProduct : product,
                ),
            );

            toast.success("محصول بروزرسانی شد");
            setError(null);

            return updatedProduct;
        } catch (error) {
            toast.error(error.message);
            throw error;
        } finally {
            setMutationLoading(false);
        }
    };

    /**
     * Delete a product.
     *
     * Removes deleted item from local state
     * after successful database deletion.
     */
    const deleteProduct = async (id) => {
        setMutationLoading(true);

        try {
            await deleteProductService(id);

            // Remove deleted product from state
            setProducts((prev) => prev.filter((product) => product.id !== id));
            setTotalCount((prev) => prev - 1);

            toast.success("محصول حذف شد");
            setError(null);
        } catch (error) {
            toast.error(error.message);
            throw error;
        } finally {
            setMutationLoading(false);
        }
    };

    return {
        products,
        totalCount,

        fetchLoading,
        mutationLoading,
        error,

        // Refetch data manually when needed
        refetch: fetchProducts,

        // Product CRUD actions
        addProduct,
        updateProduct,
        deleteProduct,
    };
};
