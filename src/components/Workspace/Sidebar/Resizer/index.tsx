import React, { useCallback, useRef } from 'react'

import Props from './Resizer.types'
import ResizeSidebarTooltip from 'shared/Tooltips/Tooltip/ResizeSidebar'
import { Resizer, ResizerContainer } from './Resizer.styles'

const SidebarResizer: React.FC<Props> = props => {
  const { location, resizerRef, isActive, isResizingEnabled, onClickAction } =
    props
  const tooltipCoords = useRef({ left: '', right: '', top: '' })

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
    <ResizerContainer location={location} ref={resizerRef}>
      <Resizer
        isResizingEnabled={isResizingEnabled}
        onClick={onClickAction}
        onMouseEnter={onMouseEnter}
      >
        {isActive && <ResizeSidebarTooltip coords={tooltipCoords.current} />}
      </Resizer>
    </ResizerContainer>
  )
}
export default SidebarResizer
