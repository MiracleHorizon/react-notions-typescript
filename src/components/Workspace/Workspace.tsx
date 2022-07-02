import React, { lazy, Suspense } from 'react'
import { Wrapper, Content } from './Workspace.styles'

import PageCover from '../Popups/PageCover'
const Header = lazy(() => import('./Header/Header'))
const Board = lazy(() => import('../PageTemplates/Board/BoardTemplate'))
const Sidebar = lazy(() => import('./Sidebar/Sidebar'))

const Workspace: React.FC = () => {
  return (
    <Wrapper>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Sidebar />
        <Content>
          <Header />
          <PageCover />
          <Board />
        </Content>
      </Suspense>
    </Wrapper>
  )
}

export default Workspace
