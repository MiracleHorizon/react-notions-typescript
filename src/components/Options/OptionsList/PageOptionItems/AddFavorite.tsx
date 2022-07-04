import React from 'react'

import PageOptionItem from './PageOptionItem'
import { UnfavoriteStarSVG } from 'shared/SVG'
import { ActiveListItem } from '../../../../@types/types'

const AddFavoriteItem: React.FC<ActiveListItem> = props => {
  const onAddToFavorite = (): void => {}

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
