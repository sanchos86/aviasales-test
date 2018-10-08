import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeading = styled.h4`
  font-size: 12px;
  font-weight: 600;
  line-height: 19px;
  margin: 0;
`;

const ControlHeading = ({ text }) => (
  <StyledHeading>
    {text}
  </StyledHeading>
);

ControlHeading.propTypes = {
  text: PropTypes.string.isRequired
};

export default ControlHeading;