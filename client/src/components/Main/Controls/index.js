import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CurrencyControl from './CurrencyControl';
import StopsControl from './StopsControl';

const StyledControls = styled.div`
  align-self: flex-start;
  width: 100%;
  padding: 15px 0;
  margin: 0 0 20px 0;
  position: relative;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(91, 137, 164, 0.25);
  border-radius: 5px;
  &::before {
    content: '';
    position: absolute;
    display: ${props => (props.isCurrencyExchanging ? 'block' : 'none')};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 5px;
  }

  @media (min-width: 769px) {
    width: 232px;
    flex-direction: row;
    margin: 0 20px 0 0;
  }
`;

const Controls = ({
  activeCurrency,
  isCurrencyExchanging,
  handleCurrencyChange,
  stops,
  handleStopsChange,
  handleUncheckOther
}) => (
  <StyledControls isCurrencyExchanging={isCurrencyExchanging}>
    <CurrencyControl
      activeCurrency={activeCurrency}
      handleCurrencyChange={handleCurrencyChange}
    />
    <StopsControl
      stops={stops}
      handleStopsChange={handleStopsChange}
      handleUncheckOther={handleUncheckOther}
    />
  </StyledControls>
);

Controls.propTypes = {
  activeCurrency: PropTypes.string.isRequired,
  isCurrencyExchanging: PropTypes.bool.isRequired,
  handleCurrencyChange: PropTypes.func.isRequired,
  stops: PropTypes.object.isRequired,
  handleStopsChange: PropTypes.func.isRequired,
  handleUncheckOther: PropTypes.func.isRequired
};

export default Controls;
