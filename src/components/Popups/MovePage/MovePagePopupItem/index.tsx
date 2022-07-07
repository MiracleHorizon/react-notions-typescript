import React from 'react'

import EmptyPageIconSVG from 'shared/SVG/EmptyPageIcon'
import selectedItemHandler from 'helpers/selectedItemHandler'
import { MovePageToModalItemProps } from './MovePagePopupItem.types'
import { StyledItem, Icon, Title, Subtitle } from './MovePagePopupItem.styles'

const MovePagePopupItem: React.FC<MovePageToModalItemProps> = props => {
  const { id, icon, title, isHasIcon, action, activeItem, onSelectActiveItem } =
    props
  const isActive = selectedItemHandler({ activeItem, item: { id, title } })

  return (
    <StyledItem
      isActive={isActive}
      onClick={() => action(id)}
      onMouseEnter={() => onSelectActiveItem({ title, id })}
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

export default MovePagePopupItem
