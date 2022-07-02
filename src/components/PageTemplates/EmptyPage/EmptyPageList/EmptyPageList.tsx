import React from 'react'
import EmptyPageItem from '../EmptyPageItem/EmptyPageItem'
import { EmptyPageListProps } from './EmptyPageList.types'
import { StylesList } from './EmptyPageList.styles'

const EmptyPageList: React.FC<EmptyPageListProps> = props => {
  const { list, activeItem, onSelect } = props

  return (
    <StylesList>
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
    </StylesList>
  )
}

export default EmptyPageList
