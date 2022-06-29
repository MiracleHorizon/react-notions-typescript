import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useStylesHandler } from 'hooks/useStylesHandler'
import { useSelectItem } from 'hooks/useSelectItem'

import FavoritePagesList from './FavoritePagesList'
import CommonPagesList from './CommonPagesList'
import NewPageBar from './NewPageBar'
import SwitcherBar from './SwitcherBar'
import UserBar from './UserBar'
import { isSidebarOpenSelector } from 'redux/sidebarSlice/selectors'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import styles from './Sidebar.module.scss'

interface PagesListProps {
  activeItem: string
  onSelect: (title: string) => void
} //! Унифицировать в SelectItemProps

const Sidebar: React.FC = () => {
  const isSidebarOpen = useSelector(isSidebarOpenSelector)
  const { pageTitle } = useSelector(currentPageSelector)
  const { activeItem, onSelectItem } = useSelectItem(pageTitle)

  const sidebarRef = useRef<HTMLDivElement>(null)
  const isSidebarHovering = useHover(sidebarRef)

  const className = useStylesHandler({
    isTrue: isSidebarOpen,
    basicClassName: styles.sidebar,
    isTrueClassName: null,
    isFalseClassName: styles.close,
  }) //!

  return (
    <div className={className} ref={sidebarRef}>
      <SwitcherBar isHovering={isSidebarHovering} />
      <UserBar />
      <FavoritePagesList activeItem={activeItem} onSelect={onSelectItem} />
      <CommonPagesList activeItem={activeItem} onSelect={onSelectItem} />
      <NewPageBar />
    </div>
  )
}

export default Sidebar
export type { PagesListProps }
