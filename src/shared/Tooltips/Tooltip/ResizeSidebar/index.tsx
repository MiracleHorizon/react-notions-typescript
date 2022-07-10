import React from 'react'

import TooltipProps from '../Tooltip.types'
import {
  TooltipWrapper,
  TextContainer,
  Title,
  Description,
} from '../Tooltip.styles'

const ResizeSidebarTooltip: React.FC<TooltipProps> = ({ coords }) => (
  <TooltipWrapper {...coords}>
    <TextContainer>
      <Title>Drag</Title>
      <Description>to resize</Description>
    </TextContainer>
    <TextContainer>
      <Title>Click</Title>
      <Description>to close</Description>
    </TextContainer>
  </TooltipWrapper>
)

export default ResizeSidebarTooltip
