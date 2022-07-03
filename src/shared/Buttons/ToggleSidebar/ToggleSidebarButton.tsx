import React, { Fragment, useRef } from 'react'
import { useHover } from 'usehooks-ts'
import { useSidebarActionHandler } from 'hooks/useSidebarActionHandler/useSidebarActionHandler'

import Tooltip from '../../Tooltip/Tooltip'
import { ToggleSidebarBtnProps } from './ToggleSidebarButton.types'
import { toggleSidebarBtnCoordsHandler } from 'utils/helpers/toggleSidebarBtnCoordsHandler'
import { toggleSidebarTooltipHandler } from 'utils/helpers/toggleSidebarTooltipHandler'
import { Icon, StyledButton } from './ToggleSidebarButton.styles'
import switchSvg from 'assets/img/sidebar-twoArrows.svg'

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
        <Icon src={switchSvg} alt='Switch' />
      </StyledButton>
      {isHovering && <Tooltip {...tooltipParams} />}
    </Fragment>
  )
}

export default ToggleSidebarButton

// const onHover = () => {}
// onMouseEnter={onHover}
// onMouseLeave={onHover}
