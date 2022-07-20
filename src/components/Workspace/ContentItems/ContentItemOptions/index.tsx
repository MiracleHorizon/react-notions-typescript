import React, { FC, memo } from 'react'

import { AddBlockBelowButton, DragContentItemButton } from 'components/ui'

import { OptionsContainer } from './BoardContentItemOptions.styles'

const ListContentItemOptions: FC<{
  itemIndex: number
  topOffset?: number | string
}> = memo(({ itemIndex, topOffset }) => (
  <OptionsContainer topOffset={topOffset}>
    <AddBlockBelowButton itemIndex={itemIndex} />
    <DragContentItemButton itemIndex={itemIndex} />
  </OptionsContainer>
))

export default ListContentItemOptions
