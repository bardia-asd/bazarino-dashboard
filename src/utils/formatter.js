/**
 * Formats a number using Persian locale digits.
 *
 * Converts regular numbers into a localized Persian
 * number format for displaying values in the UI.
 *
 * Example:
 * 1234567 => ۱٬۲۳۴٬۵۶۷
 *
 * @param {number} value - Number to format.
 * @returns {string} Formatted Persian number.
 */
const formatNumberFa = (value) => {
    return new Intl.NumberFormat("fa-IR").format(value);
};

/**
 * Formats large numbers into a compact Persian format.
 *
 * Converts large values into readable units:
 * - Million for values >= 1,000,000
 * - Thousand for values >= 1,000
 *
 * Example:
 * 1500000 => ۱.۵میلیون
 * 25000 => ۲۵هزار
 *
 * @param {number} value - Number to format.
 * @returns {string} Compact Persian formatted number.
 */
const formatCompactNumberFa = (value) => {
    // Convert values above one million to میلیون format.
    if (value >= 1000000) {
        return `${new Intl.NumberFormat("fa-IR").format(value / 1000000)}میلیون`;
    }

    // Convert values above one thousand to هزار format.
    if (value >= 1000) {
        return `${new Intl.NumberFormat("fa-IR").format(value / 1000)}هزار`;
    }

    // Return normal formatted number for smaller values.
    return new Intl.NumberFormat("fa-IR").format(value);
};

const formatValue = (value, unit) => {
    switch (unit) {
        case "currency":
            return {
                value: formatNumberFa(value),
                unit: "تومان",
            };

        case "percent":
            return {
                value: formatNumberFa(value),
                unit: "%",
            };

        case "count":
            return {
                value: formatNumberFa(value),
                unit: "",
            };

        default:
            return {
                value: formatNumberFa(value),
                unit: "",
            };
    }
};

export { formatNumberFa, formatCompactNumberFa, formatValue };
