import styled from 'styled-components'
import { ElementCoords } from 'types'

const Wrapper = styled.div<{ coords: ElementCoords }>`
  position: absolute;
  top: ${props => props.coords.top};
  bottom: ${props => props.coords.bottom};
  left: ${props => props.coords.left};
  right: ${props => props.coords.right};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  max-height: 30vh;
  padding: 6px 4px;
  border-radius: 4px;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px,
    rgb(15 15 15 / 20%) 0 9px 24px;
  background: white;
`

export default Wrapper
