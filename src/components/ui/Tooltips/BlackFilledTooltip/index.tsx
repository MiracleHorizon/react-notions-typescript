import React, { FC, memo } from 'react'

import Props from './BlackFilledTooltip.types'
import * as Tooltip from './BlackFilledTooltip.styles'

const BlackFilledTooltip: FC<Props> = memo(({ title, description, coords }) => (
  <Tooltip.Wrapper {...coords}>
    {title && <Tooltip.Title>{title}</Tooltip.Title>}
    {description && <Tooltip.Description>{description}</Tooltip.Description>}
  </Tooltip.Wrapper>
))

export default BlackFilledTooltip
