export const decimalNumber = (number) => {
    const value = number || 0;

    return (Math.round(value * 100) / 100).toFixed(2);
};
