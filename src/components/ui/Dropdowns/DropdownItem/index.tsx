import React, { FC, memo } from 'react'

import Props from './DropdownItem.types'
import { CheckSvg } from 'components/ui/SVG'
import { StyledItem, Description } from './DropdownItem.styles'

const DropdownItem: FC<Props> = memo(
  ({ title, description, activeFilter, activeItem, ...actions }) => (
    <StyledItem
      {...{ isActive: activeItem === title }}
      onClick={() => actions.onClick(title)}
      onMouseEnter={() => actions.onSelect(title)}
    >
      <Description>{description}</Description>
      {activeFilter === title && <CheckSvg width={14} height={14} />}
    </StyledItem>
  )
)

export default DropdownItem
