import React from 'react'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Board from '../Templates/Board'

import styles from './Workspace.module.scss'

const Workspace: React.FC = () => {
  return (
    <div className={styles.workspace}>
      <Sidebar />
      <div>
        <Header />
        <Board />
      </div>
    </div>
  )
}

export default Workspace

// const settingsPopupClickHandler = (e: MouseEvent) => {
//   if (!e.composedPath().includes('')) {
//
//   }
// }
// onClick={settingsPopupClickHandler}
