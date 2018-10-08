/**
 * @param {string} targetCurrency - new currency
 * @returns {string} - url to get exchange rate
 */
export const getCurrencyExchangeUrl = (targetCurrency) => {
  return `https://free.currencyconverterapi.com/api/v6/convert?q=RUB_${targetCurrency}&compact=ultra`;
};

/**
 * @param {number} stopsAmount - amount of stops
 * @returns {object} - text for markup depending of stops amount
 */
export const getStopsText = (stopsAmount) => {
  let text = '';
  if (stopsAmount === 1) {
    text = '1 пересадка';
  }
  if ([2, 3, 4].indexOf(stopsAmount) !== -1) {
    text = `${stopsAmount} пересадки`;
  }
  if (stopsAmount > 4 && stopsAmount < 21) {
    text = `${stopsAmount} пересадок`;
  }
  return {__html: text.length ? text : '&nbsp;'};
};

/**
 * @param {string} currency - active currency
 * @returns {string} - currency sign
 */
export const getCurrencySign = (currency) => {
  const currencySigns = {
    'RUB': 'ruble-sign',
    'USD': 'dollar-sign',
    'EUR': 'euro-sign'
  };
  return currencySigns[currency];
};

/**
 * @param {string} date - date to parse
 * @returns {string} - short name of the day
 */
export const getDayShortName = (date) => {
  const shortName = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  let dt = date.split('.');
  dt = Date.parse(`${dt[1]}.${dt[0]}.${dt[2]}`);

  if (dt) {
    return shortName[new Date(dt).getDay()];
  }
  return '';
};