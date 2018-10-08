import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRubleSign, faDollarSign, faEuroSign, faPlane } from '@fortawesome/free-solid-svg-icons';

import api from 'api';
import Heading from "components/Heading";
import Main from 'components/Main';
import Loader from 'components/Loader';

library.add(faRubleSign, faDollarSign, faEuroSign, faPlane);

class App extends React.Component {
  state = {
    isLoading: false,
    isCurrencyExchanging: false,
    activeCurrency: 'RUB',
    ticketsToRender: [],
    tickets: [],
    error: null
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    });
    api.getTickets()
      .then(({ tickets }) => {
        const sortedTickets = tickets.sort((ticket_1, ticket_2) => ticket_1.price - ticket_2.price);
        this.setState({
          isLoading: false,
          ticketsToRender: sortedTickets,
          tickets: sortedTickets
        });
      })
      .catch((err) => {
        this.setState({
          isLoading: false
        });
        console.error(err)
      });
  }
  handleChangeCurrency = (newCurrency) => {
    const { activeCurrency } = this.state;

    if (activeCurrency === newCurrency) return;

    if (newCurrency === 'RUB') {
      this.setState({
        activeCurrency: 'RUB',
        ticketsToRender: this.state.tickets
      });
    } else {
      this.exchangeCurrency(newCurrency);
    }
  }
  exchangeCurrency = (newCurrency) => {
    this.setState({
      isCurrencyExchanging: true
    });
    api.getExchangeRate(newCurrency)
      .then((data) => {
        const exchangeRate = data[`RUB_${newCurrency}`];
        const ticketsToRender = this.state.tickets.map((ticket) => {
          let newPrice = ticket.price * exchangeRate;
          return {...ticket, price: +newPrice.toFixed(2)};
        });
        this.setState({
          activeCurrency: newCurrency,
          isCurrencyExchanging: false,
          ticketsToRender
        });
      })
      .catch((err) => {
        this.setState({
          isCurrencyExchanging: false
        });
        console.error(err);
      });
  }
  render() {
    const {
      activeCurrency,
      isLoading,
      isCurrencyExchanging,
      ticketsToRender
    } = this.state;

    return (
      isLoading ? (
        <Loader />
      ) : (
        <>
          <Heading />
          <Main
            isCurrencyExchanging={isCurrencyExchanging}
            activeCurrency={activeCurrency}
            handleChangeCurrency={this.handleChangeCurrency}
            ticketsToRender={ticketsToRender}
          />
        </>
      )
    )
  }
}

export default App;