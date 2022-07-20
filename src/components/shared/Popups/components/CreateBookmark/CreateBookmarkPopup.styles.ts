import styled from 'styled-components'
import { ElementCoords } from 'types'

export const Wrapper = styled.div<{ coords: ElementCoords }>`
  position: absolute;
  left: ${props => props.coords.left};
  top: ${props => props.coords.top};
  width: 300px;
  height: 130px;
  padding: 13px;
  border-radius: 4px;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px,
    rgb(15 15 15 / 20%) 0 9px 24px;
  overflow: hidden;
  background: white;

  input {
    margin-bottom: 2px;
  }
`

export const TooltipTitle = styled.p`
  margin-top: -5px;
  font-size: 12px;
  text-align: center;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(55, 53, 47, 0.65);
`
