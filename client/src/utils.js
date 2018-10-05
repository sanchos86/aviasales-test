export const getCurrencyExchangeUrl = (targetCurrency) => {
  return `https://free.currencyconverterapi.com/api/v6/convert?q=RUB_${targetCurrency}&compact=ultra`;
};