import React from 'react'

import EmptyPageIconSVG from 'shared/SVG/EmptyPage'
import { MovePageToModalItemProps } from './MovePageToModalItem.types'
import { StyledItem, Icon, Title, Subtitle } from './MovePageToModalItem.styles'

const MovePageToModalItem: React.FC<MovePageToModalItemProps> = props => {
  const { id, icon, title, isHasIcon, action, activeItem, onSelect } = props
  const isActive = activeItem === title

  return (
    <StyledItem
      {...{ isActive }}
      onMouseEnter={() => onSelect(title)}
      onClick={() => action(id)}
    >
      {isHasIcon ? (
        <Icon src={icon} />
      ) : (
        <EmptyPageIconSVG
          {...{ sizes: { width: 18, height: 18 }, transparency: 1 }}
        />
      )}
      <Title>{title}</Title>
    </StyledItem>
  )
}

export default MovePageToModalItem
