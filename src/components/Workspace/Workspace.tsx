import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

import { Wrapper, Content } from './Workspace.styles'
import { PageTemplates } from 'redux/popupsSlice/types'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'

const Header = lazy(() => import('../Header'))
const Board = lazy(() => import('../PageTemplates/Board'))
const Sidebar = lazy(() => import('../Sidebar/Sidebar'))

const Workspace: React.FC = () => {
  const { template } = useSelector(currentPageSelector)

  const pageTemplateHandler = (): JSX.Element | null => {
    switch (template) {
      case PageTemplates.BOARD:
        return <Board />
      case PageTemplates.TASK_LIST:
        return <>Task List</>
      case PageTemplates.CALENDAR:
        return <>Calender</>
      default:
        return null
    }
  } //! null

  return (
    <Wrapper>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Sidebar />
        <Content>
          <Header />
          <Board />
        </Content>
      </Suspense>
    </Wrapper>
  )
}

export default Workspace
