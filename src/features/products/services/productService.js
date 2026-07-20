import { supabase } from "@/lib/supabase";

/**
 * Fetches all products from the database.
 *
 * Returns products sorted by creation date
 * in descending order (newest first).
 */
export const getProducts = async () => {
    const { data: products, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw error;

    return products;
};

/**
 * Fetches the top selling products.
 *
 * Returns a limited number of products.
 *
 * @param {number} limit - Maximum number of products to return.
 */
export const getTopSellingProducts = async (limit = 5) => {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(limit);

    if (error) throw error;

    return data;
};

/**
 * Creates a new product.
 *
 * Returns the newly created product.
 */
export const createProduct = async (product) => {
    const { data, error } = await supabase
        .from("products")
        .insert(product)
        .select()
        .single();

    if (error) throw error;

    return data;
};

/**
 * Updates an existing product.
 *
 * @param {string} id - Product ID.
 * @param {Object} updates - Fields to update.
 *
 * Returns the updated product.
 */
export const updateProduct = async (id, updates) => {
    const { data, error } = await supabase
        .from("products")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data;
};

/**
 * Deletes a product by its ID.
 */
export const deleteProduct = async (id) => {
    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) throw error;
};
