import React, { FC, memo } from 'react'

import Props from './EmptyPageList.types'
import EmptyPageItem from '../EmptyPageItem'
import StyledList from './EmptyPageList.styles'

const EmptyPageList: FC<Props> = memo(props => {
  const { list, activeItem, onSelect } = props

  return (
    <StyledList>
      {list.map(item => (
        <EmptyPageItem
          key={item.title}
          {...item}
          activeItem={activeItem}
          onSelect={onSelect}
        />
      ))}
    </StyledList>
  )
})

export default EmptyPageList
