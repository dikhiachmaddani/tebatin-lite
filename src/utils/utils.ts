export const formatCurrency = (
    amount: number
): string => {
    const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    let formatted = formatter.format(amount);

    formatted = formatted
        .replace(/\./g, ",")
        .replace(/,/g, ".")
        .replace(/\.\d{2}(?!\d)/, (match) => match.replace(".", ","));

    const regex = new RegExp("IDR" + "\\s*", "g");
    return formatted.replace(regex, "IDR").trim();
};
