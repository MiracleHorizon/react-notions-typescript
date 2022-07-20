import React, { FC, memo } from 'react'

import Props from './RenameItem.types'
import PageOptionItem from '../../PageOptionItem'
import { RenameSvg } from 'components/ui/SVG'

const RenameItem: FC<Props> = memo(props => {
  return <PageOptionItem title='Rename' IconSvg={RenameSvg} {...props} />
})

export default RenameItem
