import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { currencies } from '../../../../constants';
import ControlHeading from '../ControlHeading';
import CurrencyExchangeControl from './CurrencyExchangeControl';

const StyledCurrencyExchangeControlsWrapper = styled.div`
  display: flex;
  margin: 10px 0 30px;
`;

const CurrencyControl = ({ activeCurrency, handleChangeCurrency }) => (
  <>
    <ControlHeading text={'ВАЛЮТА'}/>
    <StyledCurrencyExchangeControlsWrapper>
      {
        currencies.map((currency) =>
          <CurrencyExchangeControl
            key={currency}
            currency={currency}
            isActive={currency === activeCurrency}
            handleChangeCurrency={handleChangeCurrency}
          />
        )
      }
    </StyledCurrencyExchangeControlsWrapper>
  </>
);

CurrencyControl.propTypes = {
  activeCurrency: PropTypes.string.isRequired,
  handleChangeCurrency: PropTypes.func.isRequired
};

export default CurrencyControl;