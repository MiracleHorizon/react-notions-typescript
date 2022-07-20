import styled from 'styled-components'
import { ElementCoords } from 'types'

const IconContainer = styled.div<ElementCoords>`
  cursor: pointer;
  position: absolute;
  top: ${props => props?.top};
  bottom: ${props => props?.bottom};
  left: ${props => props?.left};
  right: ${props => props?.right};
`

export default IconContainer
