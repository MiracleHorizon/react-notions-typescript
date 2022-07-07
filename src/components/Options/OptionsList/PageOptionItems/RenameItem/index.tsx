import React from 'react'

import PageOptionItem from '../PageOptionItem'
import Props from './RenameItem.types'
import { RenameSvg } from 'shared/SVG'

const RenameItem: React.FC<Props> = props => {
  return <PageOptionItem title='Rename' IconSvg={RenameSvg} {...props} />
}

export default RenameItem
