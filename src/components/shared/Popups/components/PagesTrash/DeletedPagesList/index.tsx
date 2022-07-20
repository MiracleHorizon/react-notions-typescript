import React, { FC, memo } from 'react'

import { useSelectActiveItem } from 'hooks/mouse/useSelectActiveItem'
import { ActiveItem } from 'types'
import Props from './DeletedPagesList.types'
import DeletedPageItem from '../DeletedPageItem'
import ListWrapper from './DeletedPagesList.styles'

const DeletedPagesList: FC<Props> = memo(({ list }) => {
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
})

export default DeletedPagesList
