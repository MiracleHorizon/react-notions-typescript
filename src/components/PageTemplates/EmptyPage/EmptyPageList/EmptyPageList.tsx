import React from 'react'
import EmptyPageItem from '../EmptyPageItem/EmptyPageItem'
import { EmptyPageListProps } from './EmptyPageList.types'
import { StyledList } from './EmptyPageList.styles'

const EmptyPageList: React.FC<EmptyPageListProps> = props => {
  const { list, activeItem, onSelect } = props

  return (
    <StyledList>
      {list.map(({ title, img, action }) => (
        <EmptyPageItem
          key={title}
          title={title}
          img={img}
          action={action}
          activeItem={activeItem}
          onSelect={onSelect}
        />
      ))}
    </StyledList>
  )
}

export default EmptyPageList
