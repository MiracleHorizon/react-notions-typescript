import React from 'react'

import PageOptionItem from './PageOptionItem'
import { TrashSvg } from 'shared/SVG'
import { ActiveListItem } from '../../../../@types/generalTypes'

const PagesTrashItem: React.FC<ActiveListItem> = props => {
  const onOpenTrashPopup = (): void => {}

  return (
    <PageOptionItem
      title='Trash'
      IconSvg={TrashSvg}
      action={onOpenTrashPopup}
      {...props}
    />
  )
}

export default PagesTrashItem
