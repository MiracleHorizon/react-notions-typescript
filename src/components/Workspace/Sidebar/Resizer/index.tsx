import React, { FC, memo, useCallback, useRef } from 'react'

import Props from './Resizer.types'
import { ElementCoords } from 'types'
import { ResizeSidebarTooltip } from 'components/ui'
import { ResizerContainer, Resizer } from './Resizer.styles'

const SidebarResizer: FC<Props> = memo(props => {
  const { location, resizerRef, isActive, isResizingEnabled, onClickAction } =
    props
  const tooltipCoords = useRef<ElementCoords>({ left: '', right: '', top: '' })

  const onMouseEnter = useCallback(
    (e: React.MouseEvent) => {
      tooltipCoords.current.top = e.clientY - 20 + 'px'

      location === 'Left'
        ? (tooltipCoords.current.left = '20px')
        : (tooltipCoords.current.right = '20px')
    },
    [location]
  )

  return (
    <ResizerContainer ref={resizerRef} location={location}>
      <Resizer
        isResizingEnabled={isResizingEnabled}
        onMouseEnter={onMouseEnter}
        onClick={onClickAction}
      >
        {isActive && <ResizeSidebarTooltip coords={tooltipCoords.current} />}
      </Resizer>
    </ResizerContainer>
  )
})

export default SidebarResizer
