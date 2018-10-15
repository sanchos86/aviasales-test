import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledStopsControlItem,
  Label,
  Checkbox,
  Extra,
  UncheckOther
} from './style';

const StopsControlItem = ({
  item,
  checked,
  label,
  handleStopsChange,
  handleUncheckOther
}) => (
  <StyledStopsControlItem>
    <Label>
      <input
        type="checkbox"
        checked={checked}
        name={item}
        style={{ display: 'none' }}
        onChange={() => handleStopsChange(item)}
      />
      <Checkbox checked={checked} />
      {label}
    </Label>
    {item !== 'all' ? (
      <Extra>
        <UncheckOther onClick={() => handleUncheckOther(item)}>
          только
        </UncheckOther>
        <div style={{ height: '100%' }} />
      </Extra>
    ) : null}
  </StyledStopsControlItem>
);

StopsControlItem.propTypes = {
  item: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  handleStopsChange: PropTypes.func.isRequired,
  handleUncheckOther: PropTypes.func.isRequired
};

export default StopsControlItem;
