import { useEffect, useState } from "react";
import {
    createOrder,
    deleteOrder as deleteOrderService,
    getOrders,
    updateOrder as updateOrderService,
} from "../services/orderService";
import { toast } from "@/components/common/Toast";

/**
 * Custom hook for managing orders.
 *
 * Handles fetching, creating, updating,
 * deleting, and storing order data.
 */
export const useOrders = () => {
    const [orders, setOrders] = useState([]);
    const [fetchLoading, setFetchLoading] = useState(false);
    const [mutationLoading, setMutationLoading] = useState(false);
    const [error, setError] = useState(null);

    /**
     * Fetch all orders from the database.
     */
    const fetchOrders = async () => {
        setFetchLoading(true);

        try {
            const data = await getOrders();

            setOrders(data);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setFetchLoading(false);
        }
    };

    // Load orders when the hook is first used
    useEffect(() => {
        fetchOrders();
    }, []);

    /**
     * Create a new order.
     *
     * Adds the newly created order
     * to the beginning of the local state.
     */
    const addOrder = async (order) => {
        setMutationLoading(true);

        try {
            const newOrder = await createOrder(order);

            setOrders((prev) => [newOrder, ...prev]);

            toast.success("سفارش ایجاد شد");
            setError(null);

            return newOrder;
        } catch (error) {
            toast.error(error.message);
            throw error;
        } finally {
            setMutationLoading(false);
        }
    };

    /**
     * Update an existing order.
     *
     * Replaces the updated order
     * inside the local state.
     */
    const updateOrder = async (id, updates) => {
        setMutationLoading(true);

        try {
            const updatedOrder = await updateOrderService(id, updates);

            setOrders((prev) =>
                prev.map((order) => (order.id === id ? updatedOrder : order)),
            );

            toast.success("سفارش بروزرسانی شد");
            setError(null);

            return updatedOrder;
        } catch (error) {
            toast.error(error.message);
            throw error;
        } finally {
            setMutationLoading(false);
        }
    };

    /**
     * Delete an order.
     *
     * Removes the deleted order
     * from the local state.
     */
    const deleteOrder = async (id) => {
        setMutationLoading(true);

        try {
            await deleteOrderService(id);

            setOrders((prev) => prev.filter((order) => order.id !== id));

            toast.success("سفارش حذف شد");
            setError(null);
        } catch (error) {
            toast.error(error.message);
            throw error;
        } finally {
            setMutationLoading(false);
        }
    };

    return {
        // Order data
        orders,

        // Loading & error states
        fetchLoading,
        mutationLoading,
        error,

        // CRUD actions
        refetch: fetchOrders,
        addOrder,
        updateOrder,
        deleteOrder,
    };
};
