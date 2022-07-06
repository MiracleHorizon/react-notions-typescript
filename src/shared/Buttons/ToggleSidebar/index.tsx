import React, { Fragment, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { useSidebarActionHandler } from 'hooks/useSidebarActionHandler'
import Tooltip from 'shared/Tooltip'
import DoubleChevronSvg from 'shared/SVG/DoubleChevron'
import { ToggleSidebarBtnProps } from './ToggleSidebarButton.types'
import { toggleSidebarBtnCoordsHandler } from 'utils/helpers/toggleSidebarBtnCoordsHandler'
import { toggleSidebarTooltipHandler } from 'utils/helpers/toggleSidebarTooltipHandler'
import { StyledButton } from './ToggleSidebarButton.styles'

const ToggleSidebarButton: React.FC<ToggleSidebarBtnProps> = props => {
  const { purpose, location, isParentHovering } = props
  const properties = toggleSidebarBtnCoordsHandler({ purpose, location })
  const tooltipParams = toggleSidebarTooltipHandler({ purpose, location })

  const buttonRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(buttonRef)

  const onClickAction = useSidebarActionHandler({ purpose, location })

  return (
    <Fragment>
      <StyledButton
        role='button'
        ref={buttonRef}
        onClick={onClickAction}
        {...{ purpose, properties, isParentHovering }}
      >
        <DoubleChevronSvg />
      </StyledButton>
      {isHovering && <Tooltip {...tooltipParams} />}
    </Fragment>
  )
}

export default ToggleSidebarButton
