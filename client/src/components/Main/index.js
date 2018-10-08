import React from 'react';

import Controls from './Controls';
import Tickets from './Tickets';

const Main = ({ activeCurrency, handleChangeCurrency, isCurrencyExchanging, ticketsToRender }) => (
  <main style={{display: 'flex'}}>
    <Controls
      isCurrencyExchanging={isCurrencyExchanging}
      activeCurrency={activeCurrency}
      handleChangeCurrency={handleChangeCurrency}
    />
    <Tickets
      ticketsToRender={ticketsToRender}
      activeCurrency={activeCurrency}
    />
  </main>
);

export default Main;