import React from 'react'
import PageOptionItem from './PageOptionItem'
import { RemoveFavoriteSVG } from 'shared/SVG'
import { ActiveListItem } from '../../../../@types/types'

const RemoveFavoriteItem: React.FC<ActiveListItem> = props => {
  const onRemoveFavorite = (): void => {}

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
