import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

import PageCover from '../Popups/PageCover'
import { rightSidebarSelector } from 'redux/sidebarsSlice/selectors'
import { Wrapper, Container, Content } from './Workspace.styles'

const Header = lazy(() => import('./Header'))
const Board = lazy(() => import('../PageTemplates/Board'))
const LeftSidebar = lazy(() => import('./Sidebar/LeftSidebar'))
const RightSidebar = lazy(() => import('./Sidebar/RightSidebar'))

const Workspace: React.FC = () => {
  const { isOpen, width } = useSelector(rightSidebarSelector)

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
