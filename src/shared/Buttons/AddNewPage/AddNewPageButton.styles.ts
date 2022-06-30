import styled from 'styled-components'
import { IElementCoords } from '../../../@types/types'

const StyledButton = styled.div<{ coords: IElementCoords }>`
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

  :hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.1s ease-in-out;
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-in-out;
  }
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding: 2px;
  opacity: 0.7;
`

export { StyledButton, Icon }
