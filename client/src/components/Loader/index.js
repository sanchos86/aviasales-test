import React from 'react';
import styled, { keyframes } from 'styled-components';

import LoaderImg from 'images/Loader.svg';

const spin = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const StyledLoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
`;

const StyledLoader = styled.div`
  width: 55px;
  height: 55px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-image: url(${LoaderImg});
  animation: ${spin} 1.1s infinite linear;
`;

const Loader = () => (
  <StyledLoaderWrapper>
    <StyledLoader />
  </StyledLoaderWrapper>
);

export default Loader;
