import React, { FC, memo } from 'react'

import { NodeRect, tooltipCoordsHandler } from 'utils/coordsHandlers'
import * as Tooltip from '../BlackFilledTooltip.styles'

const ChangePageIconTooltip: FC<{ rect: NodeRect }> = memo(({ rect }) => (
  <Tooltip.Wrapper {...tooltipCoordsHandler.changeIcon(rect)}>
    <Tooltip.Title>Change icon</Tooltip.Title>
  </Tooltip.Wrapper>
))

export default ChangePageIconTooltip
