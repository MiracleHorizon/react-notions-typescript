import React from 'react'

import CheckSVG from 'shared/SVG/LightThene/Check'
import { DropdownItemProps } from './FilterDropdownItem.types'
import { StyledItem, Description } from './FilterDropdownItem.styles'

const FilterDropdownItem: React.FC<DropdownItemProps> = props => {
  const { title, description, onClick, activeItem, onSelect } = props

  return (
    <StyledItem
      {...{ isActive: activeItem === title }}
      onClick={() => onClick(title)}
      onMouseEnter={() => onSelect(title)}
    >
      <Description>{description}</Description>
      <CheckSVG />
    </StyledItem>
  )
}

export default FilterDropdownItem
