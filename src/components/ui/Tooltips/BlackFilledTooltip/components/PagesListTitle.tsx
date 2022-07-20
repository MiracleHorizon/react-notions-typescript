import React, { FC, memo } from 'react'

import { tooltipsCoordsList } from '../BlackFilledTooltip.coords'
import * as Tooltip from '../BlackFilledTooltip.styles'

const PagesListTitleTooltip: FC<{ title: string; description: string }> = memo(
  ({ title, description }) => (
    <Tooltip.Wrapper {...tooltipsCoordsList['pages-list-title']}>
      <Tooltip.Title>Click to {title} section</Tooltip.Title>
      <Tooltip.Description>{description}</Tooltip.Description>
    </Tooltip.Wrapper>
  )
)

export default PagesListTitleTooltip
