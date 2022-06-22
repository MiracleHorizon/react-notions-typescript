import React, { useState } from 'react'

import sidebarStyles from '../Sidebar.module.scss'
import SidebarList from '../PagesList'
import { useSelector } from 'react-redux'
import { onToggleList } from '../../../utils/onToggleList'
import Tooltip from '../../../shared/Tooltip'
import { onToggleTooltip } from '../../../utils/onToggleTooltip'
import { favoritePagesSelector } from '../../../redux/workSpaceSlice/selectors'

const FavoritePages: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false)

  const favoritePages = useSelector(favoritePagesSelector)

  const toggleFavoriteList = () => {
    onToggleList({ isOpen, setIsOpen })
  }
  const toggleTooltip = () => {
    onToggleTooltip({ isTooltipOpen, setIsTooltipOpen })
  }

  return (
    <div className={sidebarStyles.panel}>
      <div
        className={sidebarStyles.title}
        onClick={toggleFavoriteList}
        onMouseEnter={toggleTooltip}
        onMouseLeave={toggleTooltip}
      >
        {isTooltipOpen && (
          <Tooltip isOpen={isOpen} description={'Pages you have favorite.'} />
        )}
        <h3>FAVORITES</h3>
      </div>
      {isOpen && <SidebarList pages={favoritePages} />}
    </div>
  )
}

export default FavoritePages
