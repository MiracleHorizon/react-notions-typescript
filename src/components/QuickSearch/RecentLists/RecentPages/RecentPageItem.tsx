import React from 'react'

import { IRecentPageItem } from './RecentPagesList'
import { Item, Icon, Title } from '../RecentListItem.styles'

const RecentPageItem: React.FC<IRecentPageItem> = ({ title, img }) => {
  // const isActive
  // onMouseEnter={() => onSelect(title)}

  return (
    <Item isActive={false}>
      <Icon src={img} alt='Page img' />
      <Title purpose='page'>{title}</Title>
    </Item>
  )
}

export default RecentPageItem
