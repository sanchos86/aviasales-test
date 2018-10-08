import React from 'react';

import Controls from './Controls';

const Main = ({ activeCurrency, handleChangeCurrency, isCurrencyExchanging }) => (
  <main>
    <Controls
      isCurrencyExchanging={isCurrencyExchanging}
      activeCurrency={activeCurrency}
      handleChangeCurrency={handleChangeCurrency}
    />
  </main>
);

export default Main;