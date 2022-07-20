import React, { FC, memo } from 'react'

import ContentItem from '../index'

import { ContentDatasets } from 'models/content/content.types'
import * as Item from './DividerItem.styles'

const DividerItem: FC<{ itemIndex: number }> = memo(({ itemIndex }) => (
  <ContentItem
    dataContent={ContentDatasets.DIVIDER}
    optionsPanelTopOffset={-4}
    height={15}
    itemIndex={itemIndex}
  >
    <Item.Container>
      <Item.Divider />
    </Item.Container>
  </ContentItem>
))

export default DividerItem
