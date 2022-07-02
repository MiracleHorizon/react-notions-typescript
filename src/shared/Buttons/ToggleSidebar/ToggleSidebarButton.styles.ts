import styled from 'styled-components'
import {
  StyledButtonProps,
  ToggleSidebarBtnPurposes as Purposes,
} from './ToggleSidebarButton.types'

const StyledButton = styled.div<StyledButtonProps>`
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
  cursor: pointer;
  width: 25px;
  height: 25px;
  opacity: 0.5;
`

export { StyledButton, Icon }
