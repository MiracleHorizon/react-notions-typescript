import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageOptionItem from './PageOptionItem'
import { UnfavoriteStarSVG } from 'shared/SVG'
import { closePageOptionsModal } from 'redux/modalsSlice/slice'
import { addToFavorite } from 'redux/workSpaceSlice/slice'
import { ActiveListItem } from '../../../../@types/generalTypes'
import { pageOptionsModalSelector } from '../../../../redux/modalsSlice/selectors'

const AddFavoriteItem: React.FC<ActiveListItem> = props => {
  const pageId = useSelector(pageOptionsModalSelector).pageId
  const dispatch = useDispatch()

  const onAddToFavorite = (): void => {
    dispatch(addToFavorite(pageId))
    dispatch(closePageOptionsModal())
  }

  return (
    <PageOptionItem
      title='Add to Favorites'
      IconSVG={UnfavoriteStarSVG}
      action={onAddToFavorite}
      {...props}
    />
  )
}

export default AddFavoriteItem
