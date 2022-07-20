import React, { memo, useMemo } from 'react'

import Props from './MovePagePopupItem.types'
import EmptyPageIconSvg from 'components/ui/SVG/EmptyPageIcon'
import selectedItemHandler from 'helpers/selectedItemHandler'
import { StyledItem, Icon, Title, Subtitle } from './MovePagePopupItem.styles'

const MovePagePopupItem: React.FC<Props> = memo(props => {
  const { _id, title, action, iconInfo, activeItem, onSelectActiveItem } = props

  const isActive = useMemo(() => {
    return selectedItemHandler({ activeItem, item: { id: _id, title } })
  }, [_id, activeItem, title])

  return (
    <StyledItem
      isActive={isActive}
      onClick={() => action(_id)}
      onMouseEnter={() => onSelectActiveItem({ title, id: _id })}
    >
      {iconInfo.isHasIcon ? (
        <Icon src={iconInfo.iconUrl} />
      ) : (
        <EmptyPageIconSvg width={18} height={18} transparency={1} />
      )}
      <Title>{title}</Title>
    </StyledItem>
  )
})

export default MovePagePopupItem
