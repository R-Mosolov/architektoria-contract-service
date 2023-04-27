export const transformPrice = (serverPrice) => {
  let clientPrice = serverPrice
    .toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .replace('.00', '')
    + ' ₽';

  return clientPrice;
};