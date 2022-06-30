import styled from 'styled-components'
import { ToggleSidebarBtnPurposes } from './ToggleSidebarButton'

const StyledButton = styled.div<{ purpose: ToggleSidebarBtnPurposes }>`
  position: ${props =>
    props.purpose === ToggleSidebarBtnPurposes.OPEN ? 'relative' : 'absolute'};
  top: ${props => props.purpose === ToggleSidebarBtnPurposes.OPEN && '10px'};
  left: ${props => props.purpose === ToggleSidebarBtnPurposes.OPEN && '10px'};
  right: ${props => props.purpose === ToggleSidebarBtnPurposes.CLOSE && '10px'};
  align-items: center;
  justify-content: center;
  display: flex;
  width: 25px;
  height: 25px;
  border-radius: 3px;
  transform: rotate(
    ${props => props.purpose === ToggleSidebarBtnPurposes.CLOSE && '180deg'}
  );

  :hover {
    background: #e8e7e3;
    transition: background 0.1s ease-in-out;
  }

  :active {
    background: #d3d3d3;
    transition: background 0.1s ease-in-out;
  }
`

const Icon = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
  opacity: 0.5;
`

export { StyledButton, Icon }
