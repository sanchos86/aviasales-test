import React from 'react';
import PropTypes from 'prop-types';

import { availableStops, stopsDictionary } from 'utils/constants';
import ControlHeading from '../ControlHeading';
import StopsControlItem from './StopsControlItem';

const StopsControl = ({ handleStopsChange, stops, handleUncheckOther }) => (
  <>
    <ControlHeading text={'КОЛИЧЕСТВО ПЕРЕСАДОК'}/>
    <div>
      {
        availableStops.map((item) =>
          <StopsControlItem
            key={item}
            checked={item in stops}
            item={item}
            label={stopsDictionary[item]}
            handleStopsChange={handleStopsChange}
            handleUncheckOther={handleUncheckOther}
          />
        )
      }
    </div>
  </>
);

StopsControl.propTypes = {
  stops: PropTypes.object.isRequired,
  handleStopsChange: PropTypes.func.isRequired,
  handleUncheckOther: PropTypes.func.isRequired
};

export default StopsControl;
