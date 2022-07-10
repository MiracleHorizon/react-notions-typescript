import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import { useAppDispatch } from 'redux/store'
import useResize from 'hooks/mouse/useResize/useResize'
import UserPanel from './Panels/UserPanel'
import AppOptionsPanel from './Panels/AppOptionsPanel'
import PagesTrashPanel from './Panels/PagesTrashPanel'
import AddNewPagePanel from './Panels/AddNewPagePanel'
import FavoritePagesList from './PagesList/FavoritePagesList'
import CommonPagesList from './PagesList/CommonPagesList'
import SidebarResizer from '../Resizer'
import { currentPageSelector, favoritePagesSelector } from 'redux/selectors'
import { leftSidebarSelector } from 'redux/sidebarsSlice/selectors'
import { setActivePage, setLeftSidebarWidth } from 'redux/sidebarsSlice/slice'
import { Container, Content, ShadowSeparator, Wrapper } from '../Sidebar.styles'
import { getAllNotionsPages } from 'redux/workSpaceSlice/slice'
import { useWhyDidYouUpdate } from 'use-hooks'

//! 3 рендера

const LeftSidebar: React.FC = () => {
  const { id, title } = useSelector(currentPageSelector)
  const leftSidebarInfo = useSelector(leftSidebarSelector)
  const isHasFavoritePages = useSelector(favoritePagesSelector).length > 0
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const resizerRef = useRef<HTMLDivElement>(null)
  const isResizerHovering = useHover(resizerRef)

  const sidebarRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(sidebarRef)

  useMemo(() => {
    return appDispatch(getAllNotionsPages())
  }, [appDispatch])

  const { isResizingEnabled } = useResize({
    resizeDirection: 'Right',
    references: {
      node: sidebarRef,
      resizer: resizerRef,
    },
    setWidth: setLeftSidebarWidth,
    restrictions: { maxWidth: 480, minWidth: 180 },
  })

  // useWhyDidYouUpdate('test', { id, title, isResizingEnabled })

  const onCloseSidebar = useCallback((e: React.MouseEvent) => {
    // e.preventDefault()
    //
    // if (!isResizingEnabled) dispatch(closeLeftSidebar())
  }, [])

  // const onMouseLeave = useCallback((): void => {
  //   if (!isResizingEnabled) {
  //     dispatch(setLeftSidebarIsBubbling(false))
  //   }
  // }, [isResizingEnabled, dispatch])

  //      onMouseLeave={onMouseLeave}

  useEffect(() => {
    dispatch(setActivePage({ title, id }))
  }, [id, title, dispatch])

  return (
    <Wrapper
      ref={sidebarRef}
      {...{ ...leftSidebarInfo, isResizerHovering, isResizingEnabled }}
    >
      <Container
        isResizingEnabled={isResizingEnabled}
        isResizerHovering={isResizerHovering}
      >
        <UserPanel isHovering={isHovering} />
        <AppOptionsPanel />
        <ShadowSeparator />
        <Content>
          {isHasFavoritePages && <FavoritePagesList />}
          <CommonPagesList />
        </Content>
        <PagesTrashPanel />
        <AddNewPagePanel />
      </Container>
      <SidebarResizer
        isActive={!isResizingEnabled && isResizerHovering}
        isResizingEnabled={isResizingEnabled}
        location={leftSidebarInfo.location}
        resizerRef={resizerRef}
        onClickAction={onCloseSidebar}
      />
    </Wrapper>
  )
}

export default LeftSidebar
