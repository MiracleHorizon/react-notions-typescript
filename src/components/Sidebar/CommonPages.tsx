import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import SidebarList from './PagesList'
import ListTitle from './PagesList/ListTitle'
import AddNewPageButton from '../../shared/Buttons/AddNewPage'
import SidebarListTooltip from '../../shared/Tooltips/SidebarList'
import { isHoverOnSidebarSelector } from '../../redux/sidebarSlice/selectors'
import { privatePagesSelector } from '../../redux/workSpaceSlice/selectors'
import sidebarStyles from './Sidebar.module.scss'

const CommonPages: React.FC = () => {
  const [isListOpen, setIsListOpen] = useState<boolean>(true)
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false)
  const isHovered = useSelector(isHoverOnSidebarSelector) //!
  const privatePages = useSelector(privatePagesSelector)

  const toggleCommonList = () => setIsListOpen(!isListOpen)
  const toggleTooltip = () => setIsTooltipOpen(!isTooltipOpen)

  return (
    <div className={sidebarStyles.panel}>
      <ListTitle
        title={'Common'}
        toggleList={toggleCommonList}
        toggleTooltip={toggleTooltip}
      />
      {isHovered && <AddNewPageButton />}
      {isListOpen && <SidebarList pages={privatePages} />}
      {isTooltipOpen && (
        <SidebarListTooltip
          isOpen={isListOpen}
          description={'Your regular pages.'}
        />
      )}
    </div>
  )
}

export default CommonPages
