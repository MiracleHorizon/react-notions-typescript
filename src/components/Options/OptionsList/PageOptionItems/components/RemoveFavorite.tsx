import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageOptionItem from '../PageOptionItem'
import { RemoveFavoriteSvg } from 'shared/SVG'
import { closePageOptionsPopup } from 'redux/popupsSlice/slice'
import { pageOptionsPopupSelector } from 'redux/popupsSlice/selectors'
import { removeFavorite } from 'redux/workSpaceSlice/slice'
import { ActiveListItem } from '../../../../../types'

const RemoveFavoriteItem: React.FC<ActiveListItem> = props => {
  const pageId = useSelector(pageOptionsPopupSelector).pageId
  const dispatch = useDispatch()

  const onRemoveFavorite = (): void => {
    dispatch(closePageOptionsPopup())
    dispatch(removeFavorite(pageId))
  }

  return (
    <PageOptionItem
      title='Remove from Favorites'
      IconSvg={RemoveFavoriteSvg}
      action={onRemoveFavorite}
      {...props}
    />
  )
}

export default RemoveFavoriteItem
