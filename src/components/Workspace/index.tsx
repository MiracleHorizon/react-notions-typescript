import React from 'react'

import Header from '../Header'
import Sidebar from '../Sidebar'

import styles from './Workspace.module.scss'
import Banner from '../../shared/Banner'

const Workspace = () => {
  return (
    <div className={styles.workspace}>
      <Sidebar />
      <div>
        <Header />
        <Banner />
      </div>
    </div>
  )
}

export default Workspace
