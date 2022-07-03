import React from 'react'

import CheckSVG from 'shared/SVG/LightThene/Check'
import { DropdownItemProps } from './FilterDropdownItem.types'
import { StyledItem, Description } from './FilterDropdownItem.styles'

const FilterDropdownItem: React.FC<DropdownItemProps> = props => {
  const {
    title,
    description,
    activeCommentsFilter,
    activeItem,
    onClick,
    onSelect,
  } = props

  return (
    <StyledItem
      {...{ isActive: activeItem === title }}
      onClick={() => onClick(title)}
      onMouseEnter={() => onSelect(title)}
    >
      <Description>{description}</Description>
      {activeCommentsFilter === title && <CheckSVG />}
    </StyledItem>
  )
}

export default FilterDropdownItem
