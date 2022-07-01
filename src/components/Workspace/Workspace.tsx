import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

import { PageTemplates } from 'redux/popupsSlice/types'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { isSidebarOpenSelector } from 'redux/sidebarSlice/selectors'
import { Wrapper, Content } from './Workspace.styles'

const Header = lazy(() => import('../Header'))
const Board = lazy(() => import('../PageTemplates/Board'))
const Sidebar = lazy(() => import('../Sidebar/Sidebar'))

const Workspace: React.FC = () => {
  const { template } = useSelector(currentPageSelector)
  const isSidebarOpen = useSelector(isSidebarOpenSelector)

  const pageTemplateHandler = (): JSX.Element | null => {
    switch (template) {
      case PageTemplates.BOARD:
        return <Board />
      case PageTemplates.TASK_LIST:
        return <h1>Task List</h1>
      case PageTemplates.CALENDAR:
        return <h1>Calendar</h1>
      case PageTemplates.TABLE:
        return <h1>Table</h1>
      default:
        return null
    }
  } //! null

  return (
    <Wrapper>
      <Suspense fallback={<h1>Loading...</h1>}>
        {isSidebarOpen && <Sidebar />}
        <Content>
          <Header />
          {pageTemplateHandler()}
        </Content>
      </Suspense>
    </Wrapper>
  )
}

export default Workspace
