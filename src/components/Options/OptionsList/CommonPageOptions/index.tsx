import React from 'react'

import {
  DeletePageItem,
  AddFavoriteItem,
  DuplicatePageItem,
  CopyPageLinkItem,
} from '../PageOptionItems'
import { ActiveListItem } from '../../../../@types/types'

const CommonPageOptions: React.FC<ActiveListItem> = props => {
  return (
    <>
      <DeletePageItem {...props} />
      <AddFavoriteItem {...props} />
      <DuplicatePageItem {...props} />
      <CopyPageLinkItem {...props} />
    </>
  )
}

export default CommonPageOptions
