export const getProductStatus = (status) => {
    switch (status) {
        case "active":
            return {
                label: "فعال",
                variant: "success",
            };

        case "inactive":
            return {
                label: "غیرفعال",
                variant: "secondary",
            };

        case "low_stock":
            return {
                label: "موجودی کم",
                variant: "warning",
            };

        case "out_of_stock":
            return {
                label: "اتمام موجودی",
                variant: "destructive",
            };

        default:
            return {
                label: "نامشخص",
                variant: "outline",
            };
    }
};
