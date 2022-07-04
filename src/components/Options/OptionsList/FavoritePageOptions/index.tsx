import React from 'react'

import {
  RemoveFavoriteItem,
  CopyPageLinkItem,
  RenamePageItem,
} from '../PageOptionItems'
import { ActiveListItem } from '../../../../@types/types'

const FavoritePageOptions: React.FC<ActiveListItem> = props => {
  return (
    <>
      <RemoveFavoriteItem {...props} />
      <CopyPageLinkItem {...props} />
      <RenamePageItem {...props} />
    </>
  )
}

export default FavoritePageOptions
