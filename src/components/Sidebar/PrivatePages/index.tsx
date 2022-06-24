import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import SidebarList from '../PagesList'
import AddNewPageButton from '../../../shared/Buttons/AddNewPage'
import Tooltip from '../../../shared/Tooltip'
import { isHoverOnSidebarSelector } from '../../../redux/sidebarSlice/selectors'
import { onToggleList } from '../../../utils/onToggleList'
import { privatePagesSelector } from '../../../redux/workSpaceSlice/selectors'
import sidebarStyles from '../Sidebar.module.scss'

const PrivatePages: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false)
  const isHovered = useSelector(isHoverOnSidebarSelector) //!
  const privatePages = useSelector(privatePagesSelector)

  const togglePrivateList = () => onToggleList({ isOpen, setIsOpen })
  const toggleTooltip = () => setIsTooltipOpen(!isTooltipOpen)

  return (
    <div className={sidebarStyles.panel}>
      {isTooltipOpen && (
        <Tooltip
          isOpen={isOpen}
          description={'Only you can access these pages.'}
        />
      )}
      <div
        className={sidebarStyles.title}
        onClick={togglePrivateList}
        onMouseEnter={toggleTooltip}
        onMouseLeave={toggleTooltip}
      >
        <h3>PRIVATE</h3>
      </div>
      {isHovered && <AddNewPageButton />}
      {isOpen && <SidebarList pages={privatePages} />}
    </div>
  )
}

export default PrivatePages
