import styled from 'styled-components';

import Pointer from 'images/pointer.png';
import Checked from 'images/checked.svg';

export const StyledStopsControlItem = styled.div`
  display: flex;
  align-items: center;
  height: 2.25rem;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 15px;
  flex-grow: 1;
  font-size: 13px;
  cursor: url(${Pointer}), pointer;
  transition: 0.15s background-color ease-in-out;
  ${StyledStopsControlItem}:hover & {
    background-color: #f1fcff;
  }
`;

export const Checkbox = styled.span`
  display: inline-block;
  margin-right: 11px;
  position: relative;
  width: 19px;
  height: 19px;
  border-radius: 3px;
  border: 1px solid ${props => props.checked ? '#2196f3' : '#d2d5d6'};
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    left: 4px;
    z-index: 1;
    width: 9px;
    height: 7px;
    background-image: url(${Checked});
    transform: translateY(${props => props.checked ? 0 : '-5px'});
    opacity: ${props => props.checked ? 1 : 0};
    transition: all .2s ease;
  }
`;

export const Extra = styled.div`
  height: 100%;
  padding: 0 15px;
  box-shadow: -5px 0 10px #fff;
  overflow: hidden;
  ${StyledStopsControlItem}:hover & {
    background-color: #f1fcff;
  }
`;

export const UncheckOther = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  transform: translateY(30px);
  transition: .15s transform ease-in-out, .15s opacity ease-in-out;
  color: #2196f3;
  opacity: 0;
  cursor: url(${Pointer}), pointer;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  ${StyledStopsControlItem}:hover & {
    transform: translateY(0);
    opacity: 1;
  }
`;