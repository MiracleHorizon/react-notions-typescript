import React from 'react'

import PageOptionItem from './PageOptionItem'
import { LinkSVG } from 'shared/SVG'
import { ActiveListItem } from '../../../../@types/types'

const CopyPageLinkItem: React.FC<ActiveListItem> = props => {
  const onCopyPageLink = (): void => {}

  return (
    <PageOptionItem
      title='Copy link'
      IconSVG={LinkSVG}
      action={onCopyPageLink}
      {...props}
    />
  )
}

export default CopyPageLinkItem
