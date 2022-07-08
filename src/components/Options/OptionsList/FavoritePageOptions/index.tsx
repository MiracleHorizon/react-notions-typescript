import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  RemoveFavoriteItem,
  CopyPageLinkItem,
  RenameItem,
} from '../PageOptionItems'
import { pageOptionsPopupSelector } from 'redux/popupsSlice/selectors'
import { closePageOptionsPopup, openRenamePopup } from 'redux/popupsSlice/slice'
import { ActiveListItem } from '../../../../types'
import StyledList from '../OptionsList.styles'

const FavoritePageOptions: React.FC<ActiveListItem> = props => {
  const { pageId } = useSelector(pageOptionsPopupSelector)

  const dispatch = useDispatch()
  const onOpenChangePageTitlePopup = (): void => {
    dispatch(openRenamePopup())
    dispatch(closePageOptionsPopup())
  }

  return (
    <StyledList>
      <RemoveFavoriteItem {...props} />
      <CopyPageLinkItem {...props} />
      <RenameItem
        renameEssenceId={pageId}
        action={onOpenChangePageTitlePopup}
        {...props}
      />
    </StyledList>
  )
}

export default FavoritePageOptions
