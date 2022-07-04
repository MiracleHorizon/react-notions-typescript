import React from 'react'

import PageOptionItem from './PageOptionItem'
import { RenameSVG } from 'shared/SVG'
import { ActiveListItem } from '../../../../@types/types'

const RenamePageItem: React.FC<ActiveListItem> = props => {
  const onRenamePage = (): void => {}

  return (
    <PageOptionItem
      title='Rename'
      IconSVG={RenameSVG}
      action={onRenamePage}
      {...props}
    />
  )
}

export default RenamePageItem
