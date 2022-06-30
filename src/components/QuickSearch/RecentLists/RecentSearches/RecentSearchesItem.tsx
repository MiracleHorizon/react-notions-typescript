import React from 'react'
import { Item, Icon, Title } from '../RecentListItem.styles'
import searchSvg from 'assets/img/inputs/search.svg'

const RecentSearchesItem: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Item isActive={false}>
      <Icon src={searchSvg} alt='Search' />
      <Title purpose='search'>{title}</Title>
    </Item>
  )
}

export default RecentSearchesItem
