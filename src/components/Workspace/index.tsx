import React, { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './Header'
import PageCover from './PageCover'
import {
  leftSidebarSelector,
  rightSidebarSelector,
} from 'redux/sidebarsSlice/selectors'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { addRecentPage } from 'redux/quickSearchSlice/slice'
import { Wrapper, Container, Content } from './Workspace.styles'

// 2 рендера.

const Board = lazy(() => import('../PageTemplates/Board'))
const LeftSidebar = lazy(() => import('./Sidebar/LeftSidebar'))
const RightSidebar = lazy(() => import('./Sidebar/RightSidebar'))
const SidebarHoverInvoker = lazy(
  () => import('./Sidebar/LeftSidebar/HoverInvoker')
)

const Workspace: React.FC = () => {
  const { isOpen: isLeftSidebarOpen, isBubbling: isLeftSidebarBubbling } =
    useSelector(leftSidebarSelector)
  const { isOpen: isRightSidebarOpen, width: rightSidebarWidth } =
    useSelector(rightSidebarSelector)
  const { id, title, iconInfo } = useSelector(currentPageSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addRecentPage({ id, title, iconInfo }))
  }, [dispatch, iconInfo, id, title])

  return (
    <Wrapper>
      <Suspense fallback={<h1>Loading...</h1>}>
        <LeftSidebar />
        {/*{!isLeftSidebarOpen && <SidebarHoverInvoker />}*/}
        <RightSidebar />
        <Container>
          <Header />
          <Content
            isRightSidebarOpen={isRightSidebarOpen}
            rightSidebarWidth={rightSidebarWidth}
          >
            <PageCover />
            <Board />
          </Content>
        </Container>
      </Suspense>
    </Wrapper>
  )
}

export default Workspace
