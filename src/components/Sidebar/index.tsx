import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FavoritePages from './FavoritePages'
import PrivatePages from './PrivatePages'
import NewPageBar from './NewPageBar'
import SwitcherBar from './SwitcherBar'
import UserBar from './UserBar'
import { isSidebarOpenSelector } from '../../redux/sidebarSlice/selectors'
import { setIsHover, setIsNotHover } from '../../redux/sidebarSlice/slice'
import styles from './Sidebar.module.scss'

const Sidebar: React.FC = () => {
  const isOpen = useSelector(isSidebarOpenSelector)

  const dispatch = useDispatch()
  const onEnterSidebar = () => dispatch(setIsHover())
  const onLeaveSidebar = () => dispatch(setIsNotHover())

  return (
    <React.Fragment>
      {isOpen && (
        <div
          className={styles.sidebar}
          onMouseEnter={onEnterSidebar}
          onMouseLeave={onLeaveSidebar}
        >
          <SwitcherBar />
          <UserBar />
          <FavoritePages />
          <PrivatePages />
          <NewPageBar />
        </div>
      )}
    </React.Fragment>
  )
}

export default Sidebar
