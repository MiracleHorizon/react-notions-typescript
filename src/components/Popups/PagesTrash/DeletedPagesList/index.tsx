import React from 'react'

import Props from './DeletedPagesList.types'
import DeletedPageItem from '../DeletedPageItem'
import { useSelectActiveItem } from 'hooks/useSelectActiveItem'
import { ActiveItem } from 'types'
import ListWrapper from './DeletedPagesList.styles'

const DeletedPagesList: React.FC<Props> = ({ list }) => {
  const { activeItem, onSelectActiveItem } = useSelectActiveItem({})

  return (
    <ListWrapper>
      {list.map(({ id, iconInfo: { icon }, title }) => (
        <DeletedPageItem
          key={id}
          {...{ id, icon, title }}
          activeItem={activeItem as ActiveItem}
          onSelectActiveItem={onSelectActiveItem}
        />
      ))}
    </ListWrapper>
  )
}

export default DeletedPagesList
