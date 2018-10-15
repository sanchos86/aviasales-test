import React from 'react';
import styled from 'styled-components';

import Controls from './Controls';
import Tickets from './Tickets';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const Main = ({
  activeCurrency,
  handleCurrencyChange,
  isCurrencyExchanging,
                ticketsFilteredByStops,
  stops,
  handleStopsChange,
  handleUncheckOther
}) => (
  <StyledMain>
    <Controls
      isCurrencyExchanging={isCurrencyExchanging}
      activeCurrency={activeCurrency}
      handleCurrencyChange={handleCurrencyChange}
      stops={stops}
      handleStopsChange={handleStopsChange}
      handleUncheckOther={handleUncheckOther}
    />
    <Tickets
      ticketsFilteredByStops={ticketsFilteredByStops}
      activeCurrency={activeCurrency}
    />
  </StyledMain>
);

export default Main;
