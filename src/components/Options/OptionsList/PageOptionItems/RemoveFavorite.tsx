import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageOptionItem from './PageOptionItem'
import { RemoveFavoriteSVG } from 'shared/SVG'
import { closePageOptionsModal } from 'redux/modalsSlice/slice'
import { pageOptionsModalSelector } from 'redux/modalsSlice/selectors'
import { removeFavorite } from 'redux/workSpaceSlice/slice'
import { ActiveListItem } from '../../../../@types/generalTypes'

const RemoveFavoriteItem: React.FC<ActiveListItem> = props => {
  const pageId = useSelector(pageOptionsModalSelector).pageId
  const dispatch = useDispatch()

  const onRemoveFavorite = (): void => {
    dispatch(closePageOptionsModal())
    dispatch(removeFavorite(pageId))
  }

  return (
    <PageOptionItem
      title='Remove from Favorites'
      IconSvg={RemoveFavoriteSVG}
      action={onRemoveFavorite}
      {...props}
    />
  )
}

export default RemoveFavoriteItem
