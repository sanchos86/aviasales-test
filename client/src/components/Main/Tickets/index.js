import React from 'react';
import PropTypes from 'prop-types';

import Ticket from './Ticket';

const Tickets = ({ ticketsToRender, activeCurrency }) => (
  <div style={{flexGrow: 1, textAlign: 'center'}}>
    {
      !!ticketsToRender.length ? (
        ticketsToRender.map((ticket, index) =>
          <Ticket
            key={index}
            ticket={ticket}
            activeCurrency={activeCurrency}
          />
        )
      ) : (
        <p>Билетов не найдено</p>
      )
    }
  </div>
);

Tickets.propTypes = {
  ticketsToRender: PropTypes.arrayOf(PropTypes.object),
  activeCurrency: PropTypes.string.isRequired
};

export default Tickets;
