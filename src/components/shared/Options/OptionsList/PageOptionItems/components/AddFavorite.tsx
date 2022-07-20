import React, { FC, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageOptionItem from '../PageOptionItem'
import { UnfavoriteStarSvg } from 'components/ui/SVG'

import { ActiveListItem } from 'types'
import { useAppDispatch } from 'redux/store'
import { updatePage } from 'api/reduxAsyncThunks/notions'
import { pageOptionsPopupSelector } from 'redux/selectors'
import { closePageOptionsPopup } from 'redux/actions'
import objectCopier from 'helpers/objectCopier'

const AddFavoriteItem: FC<ActiveListItem> = memo(props => {
  const { page } = useSelector(pageOptionsPopupSelector)
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const onAddToFavorite = useCallback((): void => {
    const pageCopy = objectCopier(page)
    pageCopy.isFavorite = true

    dispatch(closePageOptionsPopup()) //*
    appDispatch(updatePage(pageCopy))
  }, [appDispatch, dispatch, page])

  return (
    <PageOptionItem
      title='Add to Favorites'
      IconSvg={UnfavoriteStarSvg}
      action={onAddToFavorite}
      {...props}
    />
  )
})

export default AddFavoriteItem
