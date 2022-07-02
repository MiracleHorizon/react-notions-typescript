import React, { useRef } from 'react'
import { EmptyPageItemProps } from './EmptyPageItem.types'
import {
  StyledItem,
  IconContainer,
  Icon,
  TitleContainer,
  Title,
} from './EmptyPageItem.styles'

const EmptyPageItem: React.FC<EmptyPageItemProps> = props => {
  const { title, img, action, activeItem, onSelect } = props
  const isActive = activeItem === title
  const itemRef = useRef<HTMLDivElement>(null)

  return (
    <StyledItem
      isActive={isActive}
      ref={itemRef}
      onClick={action}
      onMouseEnter={() => onSelect(title)}
    >
      <IconContainer>
        <Icon src={img} alt='PageIcon' />
      </IconContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </StyledItem>
  )
}

export default EmptyPageItem
