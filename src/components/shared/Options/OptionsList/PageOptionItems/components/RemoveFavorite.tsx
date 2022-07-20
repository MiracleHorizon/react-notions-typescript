import React, { FC, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageOptionItem from '../PageOptionItem'
import { RemoveFavoriteSvg } from 'components/ui/SVG'

import { useAppDispatch } from 'redux/store'
import { ActiveListItem } from 'types'
import { closePageOptionsPopup } from 'redux/actions'
import { pageOptionsPopupSelector } from 'redux/selectors'
import { updatePage } from 'api/reduxAsyncThunks/notions'
import objectCopier from 'helpers/objectCopier'

const RemoveFavoriteItem: FC<ActiveListItem> = memo(props => {
  const { page } = useSelector(pageOptionsPopupSelector)
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const onRemoveFavorite = useCallback((): void => {
    const pageCopy = objectCopier(page)
    pageCopy.isFavorite = false

    appDispatch(updatePage(pageCopy))
    dispatch(closePageOptionsPopup())
  }, [appDispatch, dispatch, page])

  return (
    <PageOptionItem
      title='Remove from Favorites'
      IconSvg={RemoveFavoriteSvg}
      action={onRemoveFavorite}
      {...props}
    />
  )
})

export default RemoveFavoriteItem
