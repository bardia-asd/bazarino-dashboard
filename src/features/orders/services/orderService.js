import { supabase } from "@/lib/supabase";

/**
 * Fetches all orders from the database.
 *
 * Returns orders sorted by creation date
 * in descending order (newest first).
 */
export const getOrders = async () => {
    let { data: orders, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw error;

    return orders;
};

/**
 * Creates a new order.
 *
 * Returns the newly created order.
 */
export const createOrder = async (order) => {
    const { data, error } = await supabase
        .from("orders")
        .insert(order)
        .select()
        .single();

    if (error) throw error;

    return data;
};

/**
 * Updates an existing order.
 *
 * @param {string} id - Order ID.
 * @param {Object} updates - Fields to update.
 *
 * Returns the updated order.
 */
export const updateOrder = async (id, updates) => {
    const { data, error } = await supabase
        .from("orders")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data;
};

/**
 * Deletes an order by its ID.
 */
export const deleteOrder = async (id) => {
    const { error } = await supabase.from("orders").delete().eq("id", id);

    if (error) throw error;
};
