import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledInfoArea = styled.div`
  flex-grow: 1;
  padding: 26px 25px 10px;
  font-size: 12px;
`;

export const StyledInfoAreaItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTime = styled.time`
  color: #4a4a4a;
  font-size: 32px;
  line-height: 26px;
  margin-bottom: 12px;
`;

export const StyledStops = styled.div`
  flex-grow: 1;
  text-align: center;
  color: #8b9497;
`;

export const StyledPlaneLine = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2px;
  padding: 0 5px;
`;

export const StyledLine = styled.div`
  align-self: center;
  flex-basis: 96px;
  height: 1px; 
  background-color: #8b9497; 
  margin-right: 2px;
`;

export const StyledPlane = styled(FontAwesomeIcon).attrs({
  icon: 'plane'
})`
  width: 1em;
  height: 1em;
  font-size: 13px; 
  color: #8b9497;
`;

export const StyledCity = styled.div`
  display: flex;
  justify-content: space-between;
  color: #4a4a4a;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 3px;
`;

export const StyledDate = styled.time`
  display: flex;
  justify-content: space-between;
  color: #8b9497;
`;