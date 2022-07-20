import React, { FC, memo } from 'react'

import Props from './OptionItem.types'
import { StyledItem, Title } from './OptionItem.styles'

const PageOptionItem: FC<Props> = memo(props => {
  const { title, IconSvg, action, activeItem, onSelect } = props

  return (
    <StyledItem
      isActive={activeItem === title}
      onClick={action}
      onMouseEnter={() => onSelect(title)}
    >
      <IconSvg />
      <Title>{title}</Title>
    </StyledItem>
  )
})

export default PageOptionItem
