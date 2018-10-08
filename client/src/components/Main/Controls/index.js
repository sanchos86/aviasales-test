import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CurrencyControl from './CurrencyControl';
import TransferControl from './TransferControl';

const StyledControls = styled.div`
  width: 232px;
  padding: 15px;
  margin-right: 20px;
  position: relative;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(91, 137, 164, 0.25);
  border-radius: 5px;
  &::before {
    content: '';
    position: absolute;
    display: ${props => props.isCurrencyExchanging ? 'block' : 'none'};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, .75);
    border-radius: 5px;
  }
`;

const Controls = ({ activeCurrency, isCurrencyExchanging, handleChangeCurrency }) => (
  <StyledControls isCurrencyExchanging={isCurrencyExchanging}>
    <CurrencyControl
      activeCurrency={activeCurrency}
      handleChangeCurrency={handleChangeCurrency}
    />
    <TransferControl/>
  </StyledControls>
);

Controls.propTypes = {
  activeCurrency: PropTypes.string.isRequired,
  isCurrencyExchanging: PropTypes.bool.isRequired,
  handleChangeCurrency: PropTypes.func.isRequired
};

export default Controls;