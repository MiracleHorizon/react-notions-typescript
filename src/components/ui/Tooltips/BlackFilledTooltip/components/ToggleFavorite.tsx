import React, { FC, memo, useMemo, useRef } from 'react'

import { NodeRect, tooltipCoordsHandler } from 'utils/coordsHandlers'
import * as Tooltip from '../BlackFilledTooltip.styles'

const ToggleFavoriteTooltip: FC<{ title: string; parentRect: NodeRect }> = memo(
  ({ title, parentRect }) => {
    const tooltipRef = useRef<HTMLDivElement>(null)

    const tooltipCoords = useMemo(() => {
      return tooltipCoordsHandler.header(
        tooltipRef.current?.getBoundingClientRect(),
        parentRect
      )
    }, [parentRect])

    return (
      <Tooltip.Wrapper ref={tooltipRef} {...tooltipCoords}>
        <Tooltip.Title>{title}</Tooltip.Title>
      </Tooltip.Wrapper>
    )
  }
)

export default ToggleFavoriteTooltip
