import React, { FC, memo, useMemo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { BlackFilledTooltip } from 'components/ui/index'
import { PlusSvg } from 'components/ui/SVG'

import Props from './AddNewPageButton.types'
import StyledButton from './AddNewPageButton.styles'
import { tooltipsCoordsList } from '../../Tooltips/BlackFilledTooltip/BlackFilledTooltip.coords'

const AddNewPageButton: FC<Props> = memo(props => {
  const { tooltipTitle, tooltipDescription, coords, onClickAction } = props

  const tooltipCoords = useMemo(() => {
    return tooltipsCoordsList['pages-list-item-new-page-btn']
  }, [])

  const buttonRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(buttonRef)

  return (
    <StyledButton
      role='button'
      ref={buttonRef}
      coords={coords}
      onClick={onClickAction}
      onMouseDown={e => e.stopPropagation()}
    >
      <PlusSvg />
      {isHovering && (
        <BlackFilledTooltip
          title={tooltipTitle}
          description={tooltipDescription}
          coords={tooltipCoords}
        />
      )}
    </StyledButton>
  )
})

export default AddNewPageButton
