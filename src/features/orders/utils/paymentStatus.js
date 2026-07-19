export const PAYMENT_STATUS = {
    paid: {
        label: "پرداخت شده",
        variant: "success",
    },
    pending: {
        label: "در انتظار پرداخت",
        variant: "warning",
    },
    failed: {
        label: "ناموفق",
        variant: "destructive",
    },
    refunded: {
        label: "بازپرداخت شده",
        variant: "secondary",
    },
};

export const getPaymentStatus = (status) =>
    PAYMENT_STATUS[status] ?? {
        label: status,
        variant: "secondary",
    };
