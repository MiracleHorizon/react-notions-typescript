import styled from 'styled-components'
import {
  StyledButtonProps,
  ToggleSidebarBtnPurposes as Purposes,
} from './ToggleSidebarButton.types'

const StyledButton = styled.div<StyledButtonProps>`
  cursor: pointer;
  position: ${props =>
    props.purpose === Purposes.OPEN ? 'relative' : 'absolute'};
  top: ${props => props.properties.coords.top};
  bottom: ${props => props.properties.coords.bottom};
  left: ${props => props.properties.coords.left};
  right: ${props => props.properties.coords.right};
  align-items: center;
  justify-content: center;
  display: flex;
  width: 25px;
  height: 25px;
  border-radius: 3px;
  z-index: 20;
  opacity: ${props => (props.isParentHovering ? 1 : 0)};
  transition: opacity 0.12s ease-in-out 0.1s;

  :hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.1s ease-in-out;
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-in-out;
  }

  img {
    transform: rotate(${props => props.properties.imgRotate + 'deg'});
  }
`

const Icon = styled.img`
  width: 25px;
  height: 25px;
  opacity: 0.5;
  pointer-events: none;
`

export { StyledButton, Icon }
