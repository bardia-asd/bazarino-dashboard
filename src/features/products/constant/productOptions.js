export const PRODUCT_STATUSES = [
    {
        value: "active",
        label: "فعال",
    },
    {
        value: "inactive",
        label: "غیرفعال",
    },
    {
        value: "low_stock",
        label: "موجودی کم",
    },
    {
        value: "out_of_stock",
        label: "اتمام موجودی",
    },
];

export const PRODUCT_CATEGORIES = [
    {
        value: "موبایل",
        label: "موبایل",
    },
    {
        value: "لپ تاپ",
        label: "لپ تاپ",
    },
    {
        value: "لوازم جانبی",
        label: "لوازم جانبی",
    },
    {
        value: "مانیتور",
        label: "مانیتور",
    },
    {
        value: "گیمینگ",
        label: "گیمینگ",
    },
    {
        value: "قطعات کامپیوتر",
        label: "قطعات کامپیوتر",
    },
    {
        value: "پوشیدنی",
        label: "پوشیدنی",
    },
    {
        value: "تبلت",
        label: "تبلت",
    },
    {
        value: "ذخیره سازی",
        label: "ذخیره سازی",
    },
    {
        value: "صوتی",
        label: "صوتی",
    },
    {
        value: "دوربین",
        label: "دوربین",
    },
    {
        value: "لوازم خانگی",
        label: "لوازم خانگی",
    },
];

export const PRODUCT_STATUS_FILTERS = [
    {
        value: "all",
        label: "همه وضعیت‌ها",
    },
    ...PRODUCT_STATUSES,
];

export const PRODUCT_CATEGORY_FILTERS = [
    {
        value: "all",
        label: "همه دسته‌ها",
    },
    ...PRODUCT_CATEGORIES,
];
