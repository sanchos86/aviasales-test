import axios from 'axios';

import { API_URL } from './constants';
import { getCurrencyExchangeUrl } from './utils';

const api = {
  /**
   * Make async request to get all tickets
   * @return {Promise}
  */
  getTickets() {
    return axios.get(API_URL)
      .then(response => response.data);
  },

  /**
   * Make async request for exchange rate for 2 currencies from external api
   * @param {String} targetCurrency - which currency to be used after exchange
   * @return {Promise}
  */
  getExchangeRate(targetCurrency) {
    return axios.get(getCurrencyExchangeUrl(targetCurrency))
      .then(response => response.data);
  }
};

export default api;