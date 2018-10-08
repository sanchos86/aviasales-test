import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Pointer from 'images/Pointer.png';

const StyledCurrencyExchangeControl = styled.button.attrs({
  type: 'button'
})`
  width: calc(100% / 3);
  padding: 9px 10px 7px;
  box-sizing: inherit;
  text-align: center;
  outline: 0;
  font-size: 12px;
  font-weight: 600;
  line-height: 22px;
  background-color: ${props => props.isActive ? '#2196f3' : '#ffffff'};
  color: ${props => props.isActive ? '#ffffff' : '#2196f3'};
  border: 1px solid ${props => props.isActive ? '#2196f3' : '#d2d5d6'};
  cursor: url(${Pointer}), pointer;
  transition: .1s border-color linear, .1s background-color linear;
  letter-spacing: 0.5px;
  &:first-of-type {
    border-radius: 5px 0 0 5px;
  }
  &:last-of-type {
    border-radius: 0 5px 5px 0;
  }
  &:hover {
    background-color: ${props => props.isActive ? '#2196f3' : '#f2fcff'};
    border-color: ${props => props.isActive ? '#2196f3' : '#64b5f5'};
  }
`;

const CurrencyExchangeControl = ({ isActive, currency, handleChangeCurrency }) => (
  <StyledCurrencyExchangeControl
    isActive={isActive}
    onClick={() => handleChangeCurrency(currency)}
  >
    {currency}
  </StyledCurrencyExchangeControl>
);

CurrencyExchangeControl.propTypes = {
  isActive: PropTypes.bool.isRequired,
  currency: PropTypes.string.isRequired,
  handleChangeCurrency: PropTypes.func.isRequired
};

export default CurrencyExchangeControl;