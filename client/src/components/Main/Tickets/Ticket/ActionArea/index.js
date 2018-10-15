import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Pointer from 'images/Pointer.png';
import { getCurrencySign } from 'utils/helpers';

const StyledActionArea = styled.div`
  padding: 15px;
  order: 1;
  border: 0;

  @media (min-width: 992px) {
    padding: 80px 20px 25px;
    order: 0;
    border-right: 1px solid #eceff1;
  }
`;

const StyledActionButton = styled.button.attrs({
  type: 'button'
})`
  width: 160px;
  height: 56px;
  border-radius: 5px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1), 0 1px 0 #d64d08;
  background-color: #ff6d00;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  border: 0;
  outline: 0;
  transition: box-shadow 0.2s, background-color 0.2s;
  cursor: url(${Pointer}), pointer;
  &:hover {
    background-color: #ff8124;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25), 0 1px 0 #f7661d;
  }
  &:active {
    box-shadow: none;
  }
`;

const ActionArea = ({ activeCurrency, price }) => (
  <StyledActionArea>
    <StyledActionButton>
      Купить
      <br />
      за {price} <FontAwesomeIcon icon={getCurrencySign(activeCurrency)} />
    </StyledActionButton>
  </StyledActionArea>
);

ActionArea.propTypes = {
  activeCurrency: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ActionArea;
