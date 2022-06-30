import React, { useRef } from 'react'
import { useHover } from 'usehooks-ts'

import Tooltip from '../../Tooltip/Tooltip'
import { IElementCoords } from '../../../@types/types'
import addPageSvg from 'assets/img/plus-addPage.svg'
import { StyledButton, Icon } from './AddNewPageButton.styles'

interface AddNewPageButtonProps {
  tooltipTitle?: string
  tooltipDescription?: string
  coords: IElementCoords
  action: () => void
}

const AddNewPageButton: React.FC<AddNewPageButtonProps> = props => {
  const { tooltipTitle, tooltipDescription, coords, action } = props
  const buttonRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(buttonRef)

  return (
    <StyledButton
      role='button'
      ref={buttonRef}
      coords={coords}
      onClick={action}
    >
      <Icon src={addPageSvg} alt='Add page' />
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
