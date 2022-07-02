import React from 'react'
import { TooltipWrapper, Title, Description } from './Tooltip.styles'
import { IElementCoords } from '../../@types/types'

interface TooltipProps {
  title?: string
  description?: string
  coords?: IElementCoords
}

const Tooltip: React.FC<TooltipProps> = ({ title, description, coords }) => (
  <TooltipWrapper {...coords}>
    {title && <Title>{title}</Title>}
    {description && <Description>{description}</Description>}
  </TooltipWrapper>
)

export default Tooltip
