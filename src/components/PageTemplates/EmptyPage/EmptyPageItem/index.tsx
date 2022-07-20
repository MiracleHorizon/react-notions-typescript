import React, { memo, useRef } from 'react'

import Props from './EmptyPageItem.types'
import {
  StyledItem,
  IconContainer,
  TitleContainer,
  Title,
} from './EmptyPageItem.styles'

const EmptyPageItem: React.FC<Props> = memo(props => {
  const { title, IconSVG, activeItem, action, onSelect } = props
  const itemRef = useRef<HTMLDivElement>(null)

  return (
    <StyledItem
      ref={itemRef}
      isActive={activeItem === title}
      onClick={action}
      onMouseEnter={() => onSelect(title)}
    >
      <IconContainer>
        <IconSVG />
      </IconContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </StyledItem>
  )
})

export default EmptyPageItem
