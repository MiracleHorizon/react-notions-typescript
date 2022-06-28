import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useStylesHandler } from '../../hooks/useStylesHandler'

import FavoritePagesList from './FavoritePagesList'
import CommonPagesList from './CommonPagesList'
import NewPageBar from './NewPageBar'
import SwitcherBar from './SwitcherBar'
import UserBar from './UserBar'
import { isSidebarOpenSelector } from '../../redux/sidebarSlice/selectors'
import styles from './Sidebar.module.scss'

const Sidebar: React.FC = () => {
  const isSidebarOpen = useSelector(isSidebarOpenSelector)

  const sidebarRef = useRef<HTMLDivElement>(null)
  const isSidebarHovering = useHover(sidebarRef)

  const className = useStylesHandler({
    isTrue: isSidebarOpen,
    basicClassName: styles.sidebar,
    isTrueClassName: null,
    isFalseClassName: styles.close,
  })

  return (
    <div className={className} ref={sidebarRef}>
      <SwitcherBar isHovering={isSidebarHovering} />
      <UserBar />
      <FavoritePagesList />
      <CommonPagesList />
      <NewPageBar />
    </div>
  )
}

export default Sidebar
