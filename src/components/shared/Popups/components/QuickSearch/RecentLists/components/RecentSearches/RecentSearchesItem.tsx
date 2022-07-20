import React, { FC, memo, useCallback, useMemo } from 'react'

import { IRecentSearchItem } from '../../RecentLists.types'
import { EnterSvg, QuickSearchLoupeSvg } from 'components/ui/SVG'
import selectedItemHandler from 'helpers/selectedItemHandler'
import { Item, EnterBlock, Title } from '../../RecentListItem.styles'

const RecentSearchesItem: FC<IRecentSearchItem> = memo(props => {
  const { id, title, activeItem, onSelectActiveItem } = props

  const isActive = useMemo(() => {
    return selectedItemHandler({ activeItem, item: { id, title } })
  }, [activeItem, id, title])

  const onSelect = useCallback((): void => {
    onSelectActiveItem({ id, title })
  }, [id, title, onSelectActiveItem])

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
})

export default RecentSearchesItem
