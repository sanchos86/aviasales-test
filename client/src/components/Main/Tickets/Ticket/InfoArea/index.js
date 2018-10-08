import React from 'react';
import PropTypes from 'prop-types';

import { getDayShortName, getStopsText } from 'utils';
import {
  StyledInfoArea,
  StyledInfoAreaItem,
  StyledTime,
  StyledStops,
  StyledPlaneLine,
  StyledLine,
  StyledPlane,
  StyledCity,
  StyledDate
} from './style';

const InfoArea = ({ ticket }) => {
  const {
    origin,
    origin_name: originName,
    destination,
    destination_name: destinationName,
    departure_date: departureDate,
    departure_time: departureTime,
    arrival_date: arrivalDate,
    arrival_time: arrivalTime,
    stops
  } = ticket;

  const departureDayShortName = getDayShortName(departureDate);
  const arrivalDayShortName = getDayShortName(arrivalDate);

  return (
    <StyledInfoArea>
      <StyledInfoAreaItem>
        <StyledTime>{departureTime}</StyledTime>
        <StyledStops>
          <div dangerouslySetInnerHTML={getStopsText(stops)} />
          <StyledPlaneLine>
            <StyledLine />
            <StyledPlane />
          </StyledPlaneLine>
        </StyledStops>
        <StyledTime>{arrivalTime}</StyledTime>
      </StyledInfoAreaItem>
      <StyledCity>
        <span>{origin}, {originName}</span>
        <span>{destination}, {destinationName}</span>
      </StyledCity>
      <StyledDate>
        <span>{departureDate}{departureDayShortName !== '' ? `, ${departureDayShortName}` : ''}</span>
        <span>{arrivalDate}{arrivalDayShortName !== '' ? `, ${arrivalDayShortName}` : ''}</span>
      </StyledDate>
    </StyledInfoArea>
  )
};

InfoArea.propTypes = {
  ticket: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    origin_name: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    destination_name: PropTypes.string.isRequired,
    departure_date: PropTypes.string.isRequired,
    departure_time: PropTypes.string.isRequired,
    arrival_date: PropTypes.string.isRequired,
    arrival_time: PropTypes.string.isRequired,
    stops: PropTypes.number.isRequired,
  })
};

export default InfoArea;