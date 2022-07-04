import styled from 'styled-components'
import { IElementCoords } from '../../../@types/generalTypes'

const StyledModalContainer = styled.div<{ coords: IElementCoords }>`
  position: absolute;
  top: ${props => props.coords.top};
  bottom: ${props => props.coords.bottom};
  left: ${props => props.coords.left};
  right: ${props => props.coords.left};
  width: 245px;
  max-height: 350px;
  margin-right: 20px;
  border-radius: 4px;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px,
    rgb(15 15 15 / 20%) 0 9px 24px;
  user-select: none;
  background: white;
`

const MoveToItemContainer = styled.div`
  padding: 0 4px;
`

export { StyledModalContainer, MoveToItemContainer }
