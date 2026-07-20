import { useCallback, useEffect, useState } from "react";
import { getTopSellingProducts } from "../services/productService";

/**
 * Custom hook for retrieving top-selling products.
 *
 * Fetches a limited number of products and
 * manages loading and error states.
 */
export const useTopSellingProducts = (limit) => {
    // Top-selling products list
    const [products, setProducts] = useState([]);

    // Loading state while fetching data
    const [loading, setLoading] = useState(false);

    // Stores request errors
    const [error, setError] = useState(null);

    /**
     * Fetch the top-selling products.
     */
    const fetchTopSellingProducts = useCallback(async () => {
        setLoading(true);

        try {
            const data = await getTopSellingProducts(limit);

            setProducts(data);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [limit]);

    // Fetch products when the hook mounts
    // or when the requested limit changes
    useEffect(() => {
        fetchTopSellingProducts();
    }, [fetchTopSellingProducts]);

    return {
        products,

        loading,
        error,

        // Manually refetch the latest data
        refetch: fetchTopSellingProducts,
    };
};
