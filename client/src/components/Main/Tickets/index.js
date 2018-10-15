import React from 'react';
import PropTypes from 'prop-types';

import Ticket from './Ticket';

const Tickets = ({ ticketsFilteredByStops, activeCurrency }) => (
  <div style={{ flexGrow: 1, textAlign: 'center' }}>
    {!!ticketsFilteredByStops.length ? (
      ticketsFilteredByStops.map((ticket, index) => (
        <Ticket key={index} ticket={ticket} activeCurrency={activeCurrency} />
      ))
    ) : (
      <p style={{ fontSize: '30px', marginTop: 0 }}>Билетов не найдено</p>
    )}
  </div>
);

Tickets.propTypes = {
  ticketsFilteredByStops: PropTypes.arrayOf(PropTypes.object),
  activeCurrency: PropTypes.string.isRequired
};

export default Tickets;
