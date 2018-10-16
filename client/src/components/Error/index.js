import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledError = styled.p`
  text-align: center;
  color: #ff0000;
  font-size: 32px;
  white-space: pre-line;
`;

const Error = ({ text }) => (
  <StyledError>{text}</StyledError>
);

Error.propTypes = {
  text: PropTypes.string.isRequired
};

export default Error;