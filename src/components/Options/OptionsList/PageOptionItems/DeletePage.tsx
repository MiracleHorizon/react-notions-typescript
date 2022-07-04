import React from 'react'

import PageOptionItem from './PageOptionItem'
import { DeleteTrashSVG } from 'shared/SVG'
import { ActiveListItem } from '../../../../@types/types'

const DeletePageItem: React.FC<ActiveListItem> = props => {
  const onRemovePage = (): void => {}

  return (
    <PageOptionItem
      title='Delete'
      IconSVG={DeleteTrashSVG}
      action={onRemovePage}
      {...props}
    />
  )
}

export default DeletePageItem
