import React from 'react'

import { OptionItemProps } from './OptionItem.types'
import { StyledItem, Title } from './OptionItem.styles'

const PageOptionItem: React.FC<OptionItemProps> = props => {
  const { title, IconSvg, action, activeItem, onSelect } = props
  const isActive = activeItem === title

  return (
    <StyledItem
      {...{ isActive }}
      onClick={action}
      onMouseEnter={() => onSelect(title)}
    >
      <IconSvg />
      <Title>{title}</Title>
    </StyledItem>
  )
}

export default PageOptionItem
