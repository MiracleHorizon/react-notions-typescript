import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useToggle } from 'hooks/useToggle'

import SidebarList from './PagesList'
import ListTitle from './PagesList/ListTitle'
import AddNewPageButton from 'shared/Buttons/AddNewPage'
import SidebarListTooltip from 'shared/Tooltips/SidebarList'
import { commonPagesSelector } from 'redux/workSpaceSlice/selectors'
import sidebarStyles from './Sidebar.module.scss'
import { PagesListProps } from './index'

const CommonPagesList: React.FC<PagesListProps> = props => {
  const { activeItem, onSelect } = props
  const commonPages = useSelector(commonPagesSelector)
  const { isOpen, toggleIsOpen } = useToggle(true)

  const listRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(listRef)

  const listTitleRef = useRef<HTMLDivElement>(null)
  const isListTitleHovering = useHover(listTitleRef)

  return (
    <div className={sidebarStyles.panel} ref={listRef}>
      <ListTitle
        title='Common'
        reference={listTitleRef}
        toggleList={toggleIsOpen}
      />
      {isHovering && <AddNewPageButton />}
      {isOpen && (
        <SidebarList
          pages={commonPages}
          activeItem={activeItem}
          onSelect={onSelect}
        />
      )}
      {isListTitleHovering && (
        <SidebarListTooltip isOpen={isOpen} description='Your regular pages.' />
      )}
    </div>
  )
}

export default CommonPagesList
