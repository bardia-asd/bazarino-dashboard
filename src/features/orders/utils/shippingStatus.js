export const SHIPPING_STATUS = {
    processing: {
        label: "در حال پردازش",
        variant: "warning",
    },
    shipped: {
        label: "ارسال شده",
        variant: "info",
    },
    delivered: {
        label: "تحویل شده",
        variant: "success",
    },
    cancelled: {
        label: "لغو شده",
        variant: "destructive",
    },
    returned: {
        label: "مرجوع شده",
        variant: "secondary",
    },
};

export const getShippingStatus = (status) =>
    SHIPPING_STATUS[status] ?? {
        label: status,
        variant: "secondary",
    };
