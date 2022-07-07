import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageOptionItem from './PageOptionItem'
import { UnfavoriteStarSvg } from 'shared/SVG'
import { closePageOptionsModal } from 'redux/popupsSlice/slice'
import { pageOptionsPopupSelector } from 'redux/popupsSlice/selectors'
import { addToFavorite } from 'redux/workSpaceSlice/slice'
import { ActiveListItem } from '../../../../@types/generalTypes'

const AddFavoriteItem: React.FC<ActiveListItem> = props => {
  const pageId = useSelector(pageOptionsPopupSelector).pageId
  const dispatch = useDispatch()

  const onAddToFavorite = (): void => {
    dispatch(closePageOptionsModal()) //*
    dispatch(addToFavorite(pageId))
  }

  return (
    <PageOptionItem
      title='Add to Favorites'
      IconSvg={UnfavoriteStarSvg}
      action={onAddToFavorite}
      {...props}
    />
  )
}

export default AddFavoriteItem
