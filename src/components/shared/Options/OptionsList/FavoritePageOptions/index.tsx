import React, { FC, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ActiveListItem } from 'types'
import {
  RemoveFavoriteItem,
  CopyPageLinkItem,
  RenameItem,
} from '../PageOptionItems'
import { pageOptionsPopupSelector } from 'redux/selectors'
import { closePageOptionsPopup, openRenamePopup } from 'redux/actions'
import StyledList from '../OptionsList.styles'

const FavoritePageOptions: FC<ActiveListItem> = memo(props => {
  const { page } = useSelector(pageOptionsPopupSelector)
  const dispatch = useDispatch()

  const onOpenRenamePopup = useCallback((): void => {
    dispatch(openRenamePopup())
    dispatch(closePageOptionsPopup())
  }, [dispatch])

  return (
    <StyledList>
      <RemoveFavoriteItem {...props} />
      <CopyPageLinkItem {...props} />
      <RenameItem
        renameEntityId={page._id}
        action={onOpenRenamePopup}
        {...props}
      />
    </StyledList>
  )
})

export default FavoritePageOptions
