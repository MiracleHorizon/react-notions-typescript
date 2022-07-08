import React, { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import PageCover from '../Popups/PageCover'
import PageCover from './PageCover'
import { rightSidebarSelector } from 'redux/sidebarsSlice/selectors'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { addRecentPage } from 'redux/quickSearchSlice/slice'
import { Wrapper, Container, Content } from './Workspace.styles'

// 2 рендера.

const Header = lazy(() => import('./Header'))
const Board = lazy(() => import('../PageTemplates/Board'))
const LeftSidebar = lazy(() => import('./Sidebar/LeftSidebar'))
const RightSidebar = lazy(() => import('./Sidebar/RightSidebar'))

const Workspace: React.FC = () => {
  const { isOpen, width } = useSelector(rightSidebarSelector)
  const { id, title, iconInfo } = useSelector(currentPageSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addRecentPage({ id, title, iconInfo }))
  }, [dispatch, iconInfo, id, title])

  return (
    <Wrapper>
      <Suspense fallback={<h1>Loading...</h1>}>
        <LeftSidebar />
        <RightSidebar />
        <Container>
          <Header />
          <Content isRightSidebarOpen={isOpen} rightSidebarWidth={width}>
            <PageCover />
            <Board />
          </Content>
        </Container>
      </Suspense>
    </Wrapper>
  )
}

export default Workspace
// <PageCover />
