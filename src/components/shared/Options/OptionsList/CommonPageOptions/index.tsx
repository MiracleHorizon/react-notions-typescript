import React, { FC, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ActiveListItem } from 'types'
import {
  DeleteItem,
  AddFavoriteItem,
  DuplicateItem,
  CopyPageLinkItem,
  RenameItem,
} from '../PageOptionItems'
import { pageOptionsPopupSelector } from 'redux/selectors'
import { closePageOptionsPopup, openRenamePopup } from 'redux/actions'
import StyledList from '../OptionsList.styles'

const CommonPageOptions: FC<ActiveListItem> = memo(props => {
  const { page } = useSelector(pageOptionsPopupSelector)
  const dispatch = useDispatch()

  const onOpenRenamePopup = useCallback((): void => {
    dispatch(openRenamePopup())
    dispatch(closePageOptionsPopup())
  }, [dispatch])

  return (
    <StyledList>
      <DeleteItem {...props} />
      <AddFavoriteItem {...props} />
      <DuplicateItem {...props} />
      <CopyPageLinkItem {...props} />
      <RenameItem
        renameEntityId={page._id}
        action={onOpenRenamePopup}
        {...props}
      />
    </StyledList>
  )
})

export default CommonPageOptions
