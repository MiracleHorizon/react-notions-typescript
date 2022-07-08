import React, { useRef } from 'react'
import { useHover } from 'usehooks-ts'

import Tooltip from 'shared/Tooltip'
import { PlusSvg } from 'shared/SVG'
import Props from './AddNewPageButton.types'
import StyledButton from './AddNewPageButton.styles'

const AddNewPageButton: React.FC<Props> = props => {
  const { tooltipTitle, tooltipDescription, onClickAction, coords } = props

  const buttonRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(buttonRef)

  return (
    <StyledButton
      role='button'
      ref={buttonRef}
      coords={coords}
      onClick={onClickAction}
    >
      <PlusSvg />
      {isHovering && (
        <Tooltip
          title={tooltipTitle}
          description={tooltipDescription}
          coords={{ top: '30px' }}
        />
      )}
    </StyledButton>
  )
}

export default AddNewPageButton
