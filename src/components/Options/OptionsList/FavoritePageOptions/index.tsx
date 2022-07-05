import React from 'react'

import {
  RemoveFavoriteItem,
  CopyPageLinkItem,
  RenameItem,
} from '../PageOptionItems'
import { ActiveListItem } from '../../../../@types/generalTypes'
import StyledList from '../OptionsList.styles'

const FavoritePageOptions: React.FC<ActiveListItem> = props => {
  return (
    <StyledList>
      <RemoveFavoriteItem {...props} />
      <CopyPageLinkItem {...props} />
      <RenameItem {...props} />
    </StyledList>
  )
}

export default FavoritePageOptions
