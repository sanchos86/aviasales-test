import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ActionArea from './ActionArea';
import InfoArea from './InfoArea';

const StyledTicket = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(91, 137, 164, 0.25);
  border-radius: 5px;
  transition: 0.15s box-shadow ease-in-out;
  &:hover {
    box-shadow: 0 5px 25px rgba(91, 137, 164, 0.1);
  }

  @media (min-width: 992px) {
    min-height: 161px;
    flex-direction: row;
  }
`;

const Ticket = ({ ticket, activeCurrency }) => (
  <StyledTicket>
    <ActionArea activeCurrency={activeCurrency} price={ticket.price} />
    <InfoArea ticket={ticket} />
  </StyledTicket>
);

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired,
  activeCurrency: PropTypes.string.isRequired
};

export default Ticket;
