import React from 'react'

import PageOptionItem from './PageOptionItem'
import { DuplicateSVG } from 'shared/SVG'
import { ActiveListItem } from '../../../../@types/types'

const DuplicatePageItem: React.FC<ActiveListItem> = props => {
  const onDuplicatePage = (): void => {}

  return (
    <PageOptionItem
      title='Duplicate'
      IconSVG={DuplicateSVG}
      action={onDuplicatePage}
      {...props}
    />
  )
}

export default DuplicatePageItem
