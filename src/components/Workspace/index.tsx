import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

import { PageTemplates } from '../../redux/popupsSlice/types'
import { currentPageSelector } from '../../redux/workSpaceSlice/selectors'
import styles from './Workspace.module.scss'
import EmptyPage from '../PageTemplates/EmptyPage'

const Header = lazy(() => import('../Header'))
const Board = lazy(() => import('../PageTemplates/Board'))
const Sidebar = lazy(() => import('../Sidebar'))

const Workspace: React.FC = () => {
  const { template, content } = useSelector(currentPageSelector)

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
    <div className={styles.workspace}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Sidebar />
        <div className={styles.content}>
          <Header />
          {pageTemplateHandler()}
        </div>
      </Suspense>
    </div>
  )
}

export default Workspace
