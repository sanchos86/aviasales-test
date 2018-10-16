import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRubleSign, faDollarSign, faEuroSign, faPlane } from '@fortawesome/free-solid-svg-icons';
import { values } from 'ramda';

import api from 'api';
import Heading from 'components/Heading';
import Main from 'components/Main';
import Loader from 'components/Loader';
import Error from 'components/Error';

library.add(faRubleSign, faDollarSign, faEuroSign, faPlane);

class App extends React.Component {
  state = {
    isLoading: false,
    isCurrencyExchanging: false,
    activeCurrency: 'RUB',
    ticketsWithCurrentCurrency: [],
    ticketsFilteredByStops: [],
    tickets: [],
    error: null,
    stops: {},
    maxStops: null
  };
  componentDidMount() {
    this.fetchTickets();
  }
  fetchTickets = () => {
    this.setState({
      isLoading: true
    });
    api.getTickets()
      .then(({ tickets }) => {
        const sortedTickets = tickets.sort((ticket_1, ticket_2) => ticket_1.price - ticket_2.price);
        const stops = {
          [sortedTickets[0].stops]: sortedTickets[0].stops
        };
        const maxStops = sortedTickets.reduce((acc, currValue) => {
          stops[currValue.stops] = currValue.stops;
          return acc.stops > currValue.stops ? acc : currValue;
        }).stops;

        if (Object.keys(stops).length - 1 === maxStops) {
          stops.all = 'all';
        }

        this.setState({
          isLoading: false,
          ticketsWithCurrentCurrency: sortedTickets,
          tickets: sortedTickets,
          ticketsFilteredByStops: sortedTickets,
          stops,
          maxStops
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          error: 'Something went wrong\nPlease try again later'
        });
      });
  };
  handleCurrencyChange = (newCurrency) => {
    const { activeCurrency, tickets, stops } = this.state;

    if (activeCurrency === newCurrency) return;

    if (newCurrency === 'RUB') {
      const ticketsFilteredByStops = this.filterTickets(tickets, stops);
      this.setState({
        activeCurrency: 'RUB',
        ticketsWithCurrentCurrency: this.state.tickets,
        ticketsFilteredByStops
      });
    } else {
      this.exchangeCurrency(newCurrency);
    }
  };
  exchangeCurrency = (newCurrency) => {
    this.setState({
      isCurrencyExchanging: true
    });
    api.getExchangeRate(newCurrency)
      .then((data) => {
        const { tickets, stops } = this.state;
        const exchangeRate = data[`RUB_${newCurrency}`];
        const ticketsWithCurrentCurrency = tickets.map((ticket) => {
          let newPrice = ticket.price * exchangeRate;
          return {...ticket, price: +newPrice.toFixed(2)};
        });
        const ticketsFilteredByStops = this.filterTickets(ticketsWithCurrentCurrency, stops);
        this.setState({
          activeCurrency: newCurrency,
          isCurrencyExchanging: false,
          ticketsWithCurrentCurrency,
          ticketsFilteredByStops
        });
      })
      .catch(() => {
        this.setState({
          isCurrencyExchanging: false,
          error: 'Something went wrong\nPlease try again later'
        });
      });
  };

  handleStopsChange = (item) => {
    let { stops, maxStops, ticketsWithCurrentCurrency } = this.state;
    stops = {...stops};
    const isChecked = item in stops;

    if (item === 'all') {
      stops = {};
      if (!isChecked) {
        stops = {
          'all': 'all'
        };
        for (let i = 0; i <= maxStops; i++) {
          stops[i] = i;
        }
      }
    } else {
      if (isChecked) {
        delete stops[item];
        if ('all' in stops) {
          delete stops.all;
        }
      } else {
        stops[item] = +item;
        if (Object.keys(stops).length - 1 === maxStops) {
          stops.all = 'all';
        }
      }
    }
    this.setState({
      ticketsFilteredByStops: this.filterTickets(ticketsWithCurrentCurrency, stops),
      stops
    });
  };

  handleUncheckOther = (item) => {
    const stops = {
      [item]: +item
    };
    const { ticketsWithCurrentCurrency } = this.state;
    this.setState({
      ticketsFilteredByStops: this.filterTickets(ticketsWithCurrentCurrency, stops),
      stops
    });
  };

  filterTickets = (tickets, stops) => tickets.filter(
    ticket => values(stops).includes(ticket.stops)
  );

  render() {
    const {
      activeCurrency,
      isLoading,
      isCurrencyExchanging,
      ticketsFilteredByStops,
      stops,
      error
    } = this.state;

    if (isLoading) return <Loader />;

    if (error) return <Error text={error} />;

    return (
      <>
        <Heading />
        <Main
          isCurrencyExchanging={isCurrencyExchanging}
          activeCurrency={activeCurrency}
          handleCurrencyChange={this.handleCurrencyChange}
          ticketsFilteredByStops={ticketsFilteredByStops}
          stops={stops}
          handleStopsChange={this.handleStopsChange}
          handleUncheckOther={this.handleUncheckOther}
        />
      </>
    );
  }
}

export default App;