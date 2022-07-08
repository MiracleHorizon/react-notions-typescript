import React from 'react'

import { EnterSvg, QuickSearchLoupeSvg } from 'shared/SVG'
import { IRecentSearchItem } from '../../RecentLists.types'
import selectedItemHandler from 'helpers/selectedItemHandler'
import { Item, EnterBlock, Title } from '../../RecentListItem.styles'

const RecentSearchesItem: React.FC<IRecentSearchItem> = props => {
  const { id, title, activeItem, onSelectActiveItem } = props
  const isActive = selectedItemHandler({ activeItem, item: { id, title } })

  const onSelect = (): void => {
    onSelectActiveItem({ id, title })
  }

  return (
    <Item isActive={isActive} onMouseEnter={onSelect}>
      <QuickSearchLoupeSvg />
      <Title purpose='Search'>{title}</Title>
      {isActive && (
        <EnterBlock>
          <EnterSvg />
        </EnterBlock>
      )}
    </Item>
  )
}

export default RecentSearchesItem
