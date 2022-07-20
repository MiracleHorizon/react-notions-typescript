import React, { FC } from 'react'

import { tooltipsCoordsList } from '../BlackFilledTooltip.coords'
import * as Tooltip from '../BlackFilledTooltip.styles'

const PageOptionsTooltip: FC<{ title: string }> = ({ title }) => (
  <Tooltip.Wrapper {...tooltipsCoordsList['pages-list-item-options-btn']}>
    <Tooltip.Title>{title}</Tooltip.Title>
  </Tooltip.Wrapper>
)

export default PageOptionsTooltip
