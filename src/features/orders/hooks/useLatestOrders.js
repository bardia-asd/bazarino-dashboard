import { useCallback, useEffect, useState } from "react";
import { getLatestOrders } from "../services/orderService";

/**
 * Custom hook for fetching latest orders.
 *
 * Handles loading state, error handling,
 * and provides a refetch function for manual updates.
 */
export const useLatestOrders = (limit = 6) => {
    // Stores the latest orders data
    const [orders, setOrders] = useState([]);

    // Tracks the loading state during fetching
    const [loading, setLoading] = useState(false);

    // Stores any fetch error message
    const [error, setError] = useState(null);

    /**
     * Fetches latest orders from the service.
     *
     * Wrapped with useCallback to prevent
     * unnecessary function recreation.
     */
    const fetchLatestOrders = useCallback(async () => {
        setLoading(true);

        try {
            const data = await getLatestOrders(limit);

            setOrders(data);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [limit]);

    // Fetch orders when component mounts
    // or when the limit changes
    useEffect(() => {
        fetchLatestOrders();
    }, [fetchLatestOrders]);

    return {
        // Latest orders data
        orders,

        // Request state
        loading,
        error,

        // Allows manual refresh
        refetch: fetchLatestOrders,
    };
};
