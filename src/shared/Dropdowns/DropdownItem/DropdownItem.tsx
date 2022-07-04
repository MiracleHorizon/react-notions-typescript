import React from 'react'
import CheckSVG from 'shared/SVG/Check'
import { DropdownItemProps } from './DropdownItem.types'
import { StyledItem, Description } from './DropdownItem.styles'

const DropdownItem: React.FC<DropdownItemProps> = props => {
  const { title, description, activeFilter, activeItem, ...actions } = props

  return (
    <StyledItem
      {...{ isActive: activeItem === title }}
      onClick={() => actions.onClick(title)}
      onMouseEnter={() => actions.onSelect(title)}
    >
      <Description>{description}</Description>
      {activeFilter === title && <CheckSVG />}
    </StyledItem>
  )
}

export default DropdownItem
