import React, { lazy } from 'react'
import styles from './Workspace.module.scss'

const Header = lazy(() => import('../Header'))
const Board = lazy(() => import('../Templates/Board'))
const Sidebar = lazy(() => import('../Sidebar'))

const Workspace: React.FC = () => (
  <div className={styles.workspace}>
    <Sidebar />
    <div className={styles.content}>
      <Header />
      <Board />
    </div>
  </div>
)

export default Workspace
