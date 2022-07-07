import styled from 'styled-components'
import { ElementCoords } from '../../../@types/generalTypes'

const PopupWrapper = styled.div<{ coords: ElementCoords }>`
  position: absolute;
  top: ${props => props.coords.top};
  bottom: ${props => props.coords.bottom};
  left: ${props => props.coords.left};
  right: ${props => props.coords.right};
  min-width: 180px;
  width: 100%;
  max-width: 420px;
  height: 35vh;
  max-height: 60vh;
  border-radius: 4px;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px,
    rgb(15 15 15 / 20%) 0 9px 24px;
  overflow: hidden;
  background: white;
`

const ContentContainer = styled.div`
  padding: 5px 10px;
`

const Content = styled.div``

export { PopupWrapper, ContentContainer, Content }
