import React from 'react'

import {
  RemoveFavoriteItem,
  CopyPageLinkItem,
  RenamePageItem,
} from '../PageOptionItems'
import { ActiveListItem } from '../../../../@types/generalTypes'
import StyledList from '../OptionsList.styles'

const FavoritePageOptions: React.FC<ActiveListItem> = props => {
  return (
    <StyledList>
      <RemoveFavoriteItem {...props} />
      <CopyPageLinkItem {...props} />
      <RenamePageItem {...props} />
    </StyledList>
  )
}

export default FavoritePageOptions
