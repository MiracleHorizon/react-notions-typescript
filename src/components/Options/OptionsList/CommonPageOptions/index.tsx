import React from 'react'

import {
  DeleteItem,
  AddFavoriteItem,
  DuplicateItem,
  CopyPageLinkItem,
} from '../PageOptionItems'
import { ActiveListItem } from '../../../../types'
import StyledList from '../OptionsList.styles'

const CommonPageOptions: React.FC<ActiveListItem> = props => {
  return (
    <StyledList>
      <DeleteItem {...props} />
      <AddFavoriteItem {...props} />
      <DuplicateItem {...props} />
      <CopyPageLinkItem {...props} />
    </StyledList>
  )
}

export default CommonPageOptions
