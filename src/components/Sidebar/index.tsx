import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useStylesHandler } from 'hooks/useStylesHandler'

import FavoritePagesList from './FavoritePagesList'
import CommonPagesList from './CommonPagesList'
import NewPageBar from './NewPageBar'
import SwitcherBar from './SwitcherBar'
import UserBar from './UserBar'
import { isSidebarOpenSelector } from 'redux/sidebarSlice/selectors'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { setActivePage } from 'redux/sidebarSlice/slice'
import styles from './Sidebar.module.scss'

const Sidebar: React.FC = () => {
  const isSidebarOpen = useSelector(isSidebarOpenSelector)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const isSidebarHovering = useHover(sidebarRef)
  const { pageTitle, id } = useSelector(currentPageSelector)

  const className = useStylesHandler({
    isTrue: isSidebarOpen,
    basicClassName: styles.sidebar,
    isTrueClassName: null,
    isFalseClassName: styles.close,
  })

  const dispatch = useDispatch()
  useEffect((): void => {
    dispatch(setActivePage({ title: pageTitle, id }))
  }, [dispatch, id, pageTitle])

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
