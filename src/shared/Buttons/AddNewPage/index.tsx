import React, { useRef } from 'react'
import { useHover } from 'usehooks-ts'

import Tooltip from '../../Tooltip'
import { IElementCoords } from '../../../@types/generalTypes'
import addPageSvg from 'assets/img/plus-addPage.svg'
import { StyledButton, Icon } from './AddNewPageButton.styles'

interface AddNewPageButtonProps {
  tooltipTitle?: string
  tooltipDescription?: string
  coords: IElementCoords
  onClickAction: (e: React.MouseEvent) => void
}

const AddNewPageButton: React.FC<AddNewPageButtonProps> = props => {
  const { tooltipTitle, tooltipDescription, coords, onClickAction } = props

  const buttonRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(buttonRef)

  return (
    <StyledButton
      role='button'
      ref={buttonRef}
      coords={coords}
      onClick={onClickAction}
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
