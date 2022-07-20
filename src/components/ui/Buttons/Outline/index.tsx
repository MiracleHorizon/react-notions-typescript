import React from 'react'
import { StyledButtonProps } from './OutlineButton.types'
import { StyledButton } from './OutlineButton.styles'

const OutlineButton: React.FC<StyledButtonProps> = props => {
  const { title, IconSvg, action, activeItem, onSelect, ...styles } = props
  const isActive = title === activeItem

  return (
    <StyledButton
      tabIndex={0}
      role='button'
      isActive={isActive}
      onClick={action}
      onMouseEnter={onSelect ? () => onSelect(title) : () => {}}
      {...styles}
    >
      {IconSvg && <IconSvg />}
      <p>{title}</p>
    </StyledButton>
  )
}

export default OutlineButton
