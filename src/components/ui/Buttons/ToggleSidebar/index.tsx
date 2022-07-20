import React, { FC, memo, useMemo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { useSidebarActionHandler } from 'hooks/useSidebarActionHandler'
import Props from './ToggleSidebarButton.types'
import { BlackFilledTooltip } from 'components/ui/index'
import { DoubleChevronSvg } from 'components/ui/SVG'
import propertiesHandler from 'helpers/coords/toggleSidebarBtnCoordsHandler'
import tooltipHandler from 'helpers/toggleSidebarTooltipHandler'
import StyledButton from './ToggleSidebarButton.styles'

const ToggleSidebarButton: FC<Props> = memo(props => {
  const { purpose, location, isParentHovering } = props
  const buttonRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(buttonRef)

  const properties = useMemo(() => {
    return propertiesHandler({ purpose, location })
  }, [location, purpose])

  const tooltipParams = useMemo(() => {
    return tooltipHandler({ purpose, location })
  }, [location, purpose])

  const onClickAction = useSidebarActionHandler({ purpose, location })

  return (
    <>
      <StyledButton
        role='button'
        ref={buttonRef}
        onClick={onClickAction}
        {...{ purpose, properties, isParentHovering }}
      >
        <DoubleChevronSvg />
      </StyledButton>
      {isHovering && <BlackFilledTooltip {...tooltipParams} />}
    </>
  )
})

export default ToggleSidebarButton
