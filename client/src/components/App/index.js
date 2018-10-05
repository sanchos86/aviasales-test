import React from 'react';

import api from 'api';
import Heading from "components/Heading";
import Main from 'components/Main';
import Loader from 'components/Loader';

class App extends React.Component {
  state = {
    isLoading: true,
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
      .then((tickets) => {
        this.setState({
          isLoading: false,
          tickets
        })
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      this.state.isLoading ? (
        <Loader />
      ) : (
        <>
          <Heading />
          <Main />
        </>
      )
    )
  }
}

export default App;