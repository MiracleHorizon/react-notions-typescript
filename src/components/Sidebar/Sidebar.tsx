import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import UserPanel from './UserPanel/UserPanel'
import AppOptionsPanel from './AppOptionsPanel/AppOptionsPanel'
import FavoritePagesList from './FavoritePagesList'
import CommonPagesList from './CommonPagesList'
import AddNewPagePanel from './AddNewPagePanel/AddNewPagePanel'
import { isSidebarOpenSelector } from 'redux/sidebarSlice/selectors'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { setActivePage } from 'redux/sidebarSlice/slice'
import { SidebarWrapper } from './Sidebar.styles'

const Sidebar: React.FC = () => {
  const { title, id } = useSelector(currentPageSelector)
  const isSidebarOpen = useSelector(isSidebarOpenSelector)

  const sidebarRef = useRef<HTMLDivElement>(null)
  const isSidebarHovering = useHover(sidebarRef)

  const dispatch = useDispatch()
  useEffect((): void => {
    dispatch(setActivePage({ title, id: id! }))
  }, [dispatch, id, title])

  return (
    <SidebarWrapper isOpen={isSidebarOpen} ref={sidebarRef}>
      <UserPanel isHovering={isSidebarHovering} />
      <AppOptionsPanel />
      <FavoritePagesList />
      <CommonPagesList />
      <AddNewPagePanel />
    </SidebarWrapper>
  )
}

export default Sidebar
