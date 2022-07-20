import styled from 'styled-components'
import { ElementCoords } from 'types'

const StyledButton = styled.div<{ coords: ElementCoords }>`
  cursor: pointer;
  position: absolute;
  top: ${props => props.coords?.top};
  bottom: ${props => props.coords?.bottom};
  right: ${props => props.coords?.right};
  left: ${props => props.coords?.left};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  padding: 2px;
  border: none;
  transition: background 50ms ease-in-out;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

export default StyledButton
