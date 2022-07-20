import React, { FC, memo, useCallback, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import UserPanel from './Panels/UserPanel'
import AppOptionsPanel from './Panels/AppOptionsPanel'
import PagesTrashPanel from './Panels/PagesTrashPanel'
import AddNewPagePanel from './Panels/AddNewPagePanel'
import FavoritePagesList from './PagesList/components/FavoritePagesList'
import CommonPagesList from './PagesList/components/CommonPagesList'
import SidebarResizer from '../Resizer'

import useResize from 'hooks/mouse/resize'
import { ResizeDirections } from 'hooks/mouse/resize/useResize.types'
import {
  leftSidebarStateSelector,
  favoritePagesSelector,
} from 'redux/selectors'
import { setLeftSidebarWidth, closeLeftSidebar } from 'redux/actions'
import * as Sidebar from '../Sidebar.styles'

const LeftSidebar: FC = memo(() => {
  const leftSidebarInfo = useSelector(leftSidebarStateSelector)
  const isHasFavoritePages = useSelector(favoritePagesSelector).length > 0
  const dispatch = useDispatch()

  const resizerRef = useRef<HTMLDivElement>(null)
  const isResizerHovering = useHover(resizerRef)

  const sidebarRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(sidebarRef)

  const sidebarResizeParams = useMemo(() => {
    return {
      direction: ResizeDirections.RIGHT,
      references: {
        node: sidebarRef,
        resizer: resizerRef,
      },
      setWidth: setLeftSidebarWidth,
      restrictions: { maxWidth: 480, minWidth: 180 },
    }
  }, [])
  const isResizingEnabled = useResize(sidebarResizeParams)

  const onCloseSidebar = useCallback(
    (e: React.MouseEvent) => {
      if (!isResizingEnabled && e.ctrlKey) {
        dispatch(closeLeftSidebar())
      }
    },
    [dispatch, isResizingEnabled]
  )

  return (
    <Sidebar.Wrapper
      ref={sidebarRef}
      {...{ ...leftSidebarInfo, isResizerHovering, isResizingEnabled }}
    >
      <Sidebar.Container
        isResizingEnabled={isResizingEnabled}
        isResizerHovering={isResizerHovering}
      >
        <UserPanel isHovering={isHovering} />
        <AppOptionsPanel />
        <Sidebar.ShadowSeparator />
        <Sidebar.Content padding>
          {isHasFavoritePages && <FavoritePagesList />}
          <CommonPagesList />
        </Sidebar.Content>
        <PagesTrashPanel />
        <AddNewPagePanel />
      </Sidebar.Container>
      <SidebarResizer
        isActive={!isResizingEnabled && isResizerHovering}
        isResizingEnabled={isResizingEnabled}
        location={leftSidebarInfo.location}
        resizerRef={resizerRef}
        onClickAction={onCloseSidebar}
      />
    </Sidebar.Wrapper>
  )
})

export default LeftSidebar
