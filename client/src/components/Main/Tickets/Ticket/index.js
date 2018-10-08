import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ActionArea from './ActionArea';
import InfoArea from './InfoArea';

const StyledTicket = styled.div`
  display: flex;
  height: 161px;
  margin-bottom: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(91, 137, 164, 0.25);
  border-radius: 5px;
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
