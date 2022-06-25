import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import SidebarList from './PagesList'
import ListTitle from './PagesList/ListTitle'
import SidebarListTooltip from '../../shared/Tooltips/SidebarList'
import { favoritePagesSelector } from '../../redux/workSpaceSlice/selectors'
import sidebarStyles from './Sidebar.module.scss'

const FavoritePages: React.FC = () => {
  const [isListOpen, setIsListOpen] = useState<boolean>(true)
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false)
  const favoritePages = useSelector(favoritePagesSelector)

  const toggleFavoriteList = () => setIsListOpen(!isListOpen)
  const onToggleTooltip = () => setIsTooltipOpen(!isTooltipOpen)

  return (
    <div className={sidebarStyles.panel}>
      <ListTitle
        title={'Favorites'}
        toggleList={toggleFavoriteList}
        toggleTooltip={onToggleTooltip}
      />
      {isListOpen && <SidebarList pages={favoritePages} />}
      {isTooltipOpen && (
        <SidebarListTooltip
          isOpen={isListOpen}
          description={'Pages you have favorite.'}
        />
      )}
    </div>
  )
}

export default FavoritePages
