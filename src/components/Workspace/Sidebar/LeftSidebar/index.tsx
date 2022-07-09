import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import useResize from 'hooks/useResize/useResize'
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
import { Wrapper, Container, ShadowSeparator, Content } from '../Sidebar.styles'

const LeftSidebar: React.FC = () => {
  const { id, title } = useSelector(currentPageSelector)
  const leftSidebarInfo = useSelector(leftSidebarSelector)
  const isHasFavoritePages = useSelector(favoritePagesSelector).length > 0
  const dispatch = useDispatch()

  const resizerRef = useRef<HTMLDivElement>(null)
  const isResizerHovering = useHover(resizerRef)

  const sidebarRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(sidebarRef)

  const { isResizingEnabled } = useResize({
    resizeDirection: 'Right',
    references: {
      node: sidebarRef,
      resizer: resizerRef,
    },
    setWidth: setLeftSidebarWidth,
    restrictions: { maxWidth: 480, minWidth: 180 },
  })

  const onCloseSidebar = (): void => {
    // if (!isResizingEnabled) dispatch(closeLeftSidebar())
  }

  useEffect(() => {
    dispatch(setActivePage({ title, id }))
  }, [id, title, dispatch])

  return (
    <Wrapper
      ref={sidebarRef}
      {...{
        ...leftSidebarInfo,
        isResizerHovering,
        isResizingEnabled,
      }}
    >
      <Container>
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
        location={leftSidebarInfo.location}
        resizerRef={resizerRef}
        onClickAction={onCloseSidebar}
      />
    </Wrapper>
  )
}

export default LeftSidebar
