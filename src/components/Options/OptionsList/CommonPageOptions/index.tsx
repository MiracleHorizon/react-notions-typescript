import React from 'react'

import {
  DeletePageItem,
  AddFavoriteItem,
  DuplicatePageItem,
  CopyPageLinkItem,
} from '../PageOptionItems'
import { ActiveListItem } from '../../../../@types/generalTypes'
import StyledList from '../OptionsList.styles'

const CommonPageOptions: React.FC<ActiveListItem> = props => {
  return (
    <StyledList>
      <DeletePageItem {...props} />
      <AddFavoriteItem {...props} />
      <DuplicatePageItem {...props} />
      <CopyPageLinkItem {...props} />
    </StyledList>
  )
}

export default CommonPageOptions
