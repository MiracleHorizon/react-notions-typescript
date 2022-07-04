import React from 'react'
import { useDispatch } from 'react-redux'

import PageOptionItem from './PageOptionItem'
import { RemoveFavoriteSVG } from 'shared/SVG'
import { closePageOptionsModal } from 'redux/modalsSlice/slice'
import { ActiveListItem } from '../../../../@types/generalTypes'

const RemoveFavoriteItem: React.FC<ActiveListItem> = props => {
  const dispatch = useDispatch()
  const onRemoveFavorite = (): void => {
    dispatch(closePageOptionsModal())
  }

  return (
    <PageOptionItem
      title='Remove from Favorites'
      IconSVG={RemoveFavoriteSVG}
      action={onRemoveFavorite}
      {...props}
    />
  )
}

export default RemoveFavoriteItem
