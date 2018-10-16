import React from 'react';
import styled from 'styled-components';

import Logo from 'images/logo.png';
import Pointer from 'images/pointer.png';

const StyledHeading = styled.div`
  text-align: center;
  margin-bottom: 3.125rem;
`;

const Link = styled.a`
  cursor: url(${Pointer}), pointer;
`;

const StyledLogo = styled.img`
  width: 60px;
  height: 61px;
`;

const Heading = () => (
  <StyledHeading>
    <Link href="https://www.aviasales.ru/">
      <StyledLogo src={Logo} alt="Aviasales" />
    </Link>
  </StyledHeading>
);

export default Heading;
