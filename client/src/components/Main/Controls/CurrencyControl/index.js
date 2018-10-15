import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { currencies } from 'utils/constants';
import ControlHeading from '../ControlHeading';
import CurrencyExchangeControl from './CurrencyExchangeControl';

const StyledCurrencyExchangeControlsWrapper = styled.div`
  display: flex;
  margin: 10px 15px 30px;
`;

const CurrencyControl = ({ activeCurrency, handleCurrencyChange }) => (
  <>
    <ControlHeading text={'ВАЛЮТА'} />
    <StyledCurrencyExchangeControlsWrapper>
      {currencies.map(currency => (
        <CurrencyExchangeControl
          key={currency}
          currency={currency}
          isActive={currency === activeCurrency}
          handleCurrencyChange={handleCurrencyChange}
        />
      ))}
    </StyledCurrencyExchangeControlsWrapper>
  </>
);

CurrencyControl.propTypes = {
  activeCurrency: PropTypes.string.isRequired,
  handleCurrencyChange: PropTypes.func.isRequired
};

export default CurrencyControl;
