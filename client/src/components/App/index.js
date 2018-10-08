import React from 'react';

import api from 'api';
import Heading from "components/Heading";
import Main from 'components/Main';
import Loader from 'components/Loader';

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
        this.setState({
          isLoading: false,
          tickets
        })
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
          return {...ticket, price: newPrice.toFixed(2)};
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
    const { activeCurrency, isLoading, isCurrencyExchanging } = this.state;
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
          />
        </>
      )
    )
  }
}

export default App;