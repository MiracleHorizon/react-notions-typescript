import React from 'react'
import { StyledButtonProps } from './OutlineButton.types'
import { StyledButton } from './OutlineButton.styles'

const OutlineButton: React.FC<StyledButtonProps> = props => {
  const { title, action, activeItem, onSelect, ...styles } = props
  const isActive = title === activeItem

  return (
    <StyledButton
      role='button'
      {...styles}
      isActive={isActive}
      onClick={action}
      onMouseEnter={() => onSelect(title)}
    >
      <p>{title}</p>
    </StyledButton>
  )
}

export default OutlineButton
