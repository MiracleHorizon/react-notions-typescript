import React from 'react'
import DeletedPageItem from '../DeletedPageItem'
import Props from './DeletedPagesList.types'
import ListWrapper from './DeletedPagesList.styles'

const DeletedPagesList: React.FC<Props> = props => {
  const { list, activeItem, onSelect } = props

  return (
    <ListWrapper>
      {list.map(({ id, icon, title }) => (
        <DeletedPageItem
          key={id}
          {...{ id, icon, title, activeItem, onSelect }}
        />
      ))}
    </ListWrapper>
  )
}

export default DeletedPagesList
