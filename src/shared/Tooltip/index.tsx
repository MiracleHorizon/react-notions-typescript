import React from 'react'

import Props from './Tooltip.types'
import { TooltipWrapper, Title, Description } from './Tooltip.styles'

const Tooltip: React.FC<Props> = ({ title, description, coords }) => (
  <TooltipWrapper {...coords}>
    {title && <Title>{title}</Title>}
    {description && <Description>{description}</Description>}
  </TooltipWrapper>
)

export default Tooltip
