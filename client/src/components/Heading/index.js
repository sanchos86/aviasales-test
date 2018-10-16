import React from 'react';
import styled from 'styled-components';

import Logo from 'images/logo.png';

const StyledHeading = styled.div`
  text-align: center;
  margin-bottom: 3.125rem;
`;

const StyledLogo = styled.img.attrs({
  src: Logo,
  alt: 'Aviasales'
})`
  width: 60px;
  height: 61px;
`;

const Heading = () => (
  <StyledHeading>
    <a href="https://www.aviasales.ru/">
      <StyledLogo />
    </a>
  </StyledHeading>
);

export default Heading;
