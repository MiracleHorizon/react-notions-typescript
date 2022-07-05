import React, { useRef } from 'react'
import { EmptyPageItemProps } from './EmptyPageItem.types'
import {
  StyledItem,
  IconContainer,
  TitleContainer,
  Title,
} from './EmptyPageItem.styles'

const EmptyPageItem: React.FC<EmptyPageItemProps> = props => {
  const { title, IconSVG, activeItem, action, onSelect } = props
  const itemRef = useRef<HTMLDivElement>(null)

  return (
    <StyledItem
      {...{ isActive: activeItem === title }}
      ref={itemRef}
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
}

export default EmptyPageItem
