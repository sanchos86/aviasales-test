import React from 'react';
import styled from 'styled-components';

import Logo from 'images/Logo.png';

const StyledLogo = styled.img.attrs({
  src: Logo,
  alt: 'Aviasales'
})`
  width: 60px;
  height: 61px;
  margin-bottom: 50px;
`;

const Heading = () => (
  <div style={{textAlign: 'center'}}>
    <a href="https://www.aviasales.ru/">
      <StyledLogo/>
    </a>
  </div>
);

export default Heading;

