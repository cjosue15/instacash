export const numberWithCommas = (x) => {
    const value = x || 0;
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};
