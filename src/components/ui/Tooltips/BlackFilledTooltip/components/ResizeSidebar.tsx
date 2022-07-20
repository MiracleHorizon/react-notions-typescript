import React, { FC, memo } from 'react'

import Props from '../BlackFilledTooltip.types'
import * as Tooltip from '../BlackFilledTooltip.styles'

const ResizeSidebarTooltip: FC<Props> = memo(({ coords }) => (
  <Tooltip.Wrapper {...coords}>
    <Tooltip.TextContainer>
      <Tooltip.Title>Drag</Tooltip.Title>
      <Tooltip.Description>to resize</Tooltip.Description>
    </Tooltip.TextContainer>
    <Tooltip.TextContainer>
      <Tooltip.Title>Click + Ctrl</Tooltip.Title>
      <Tooltip.Description>to close</Tooltip.Description>
    </Tooltip.TextContainer>
  </Tooltip.Wrapper>
))

export default ResizeSidebarTooltip
