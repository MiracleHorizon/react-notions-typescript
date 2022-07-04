import React from 'react'
import { IElementCoords } from '../../@types/generalTypes'
import { TooltipWrapper, Title, Description } from './Tooltip.styles'

interface TooltipProps {
  title?: string
  description?: string
  coords: IElementCoords
}

const Tooltip: React.FC<TooltipProps> = ({ title, description, coords }) => (
  <TooltipWrapper {...coords}>
    {title && <Title>{title}</Title>}
    {description && <Description>{description}</Description>}
  </TooltipWrapper>
)

export default Tooltip
