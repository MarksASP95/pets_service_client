export function formatToUSD(value: number): string {
    return Intl.NumberFormat(undefined, { style: "currency", currency: "USD" })
        .format(value);
}