import styled from 'styled-components'
import { ElementCoords } from 'types'

const TooltipWrapper = styled.div<ElementCoords>`
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: max-content;
  min-width: 0;
  padding: 3px 7px;
  border-radius: 3px;
  background: #1c1c1c;
  z-index: 2000;

  h5,
  p {
    font-size: 12px;
    margin: 1px 0;
    font-weight: 600;
  }
`

const Title = styled.h5`
  color: white;
`

const Description = styled.p`
  color: #767571;
`

export { TooltipWrapper, Title, Description }
