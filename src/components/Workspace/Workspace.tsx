import React, { lazy, Suspense } from 'react'
import { Wrapper, Content, StyledBoard } from './Workspace.styles'

const Header = lazy(() => import('./Header/Header'))
const Board = lazy(() => import('../PageTemplates/Board'))
const Sidebar = lazy(() => import('./Sidebar/Sidebar'))

const Workspace: React.FC = () => {
  return (
    <Wrapper>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Sidebar />
        <Content>
          <Header />
          <StyledBoard />
        </Content>
      </Suspense>
    </Wrapper>
  )
}

export default Workspace
