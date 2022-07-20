import styled from 'styled-components'
import {
  StyledButtonProps,
  ToggleSidebarButtonPurposes as Purposes,
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
  transition: opacity 0.12s ease-in-out 0.1s, background 50ms ease-in-out;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }

  svg {
    transform: rotate(${props => props.properties.imgRotate + 'deg'});
  }
`

export default StyledButton
