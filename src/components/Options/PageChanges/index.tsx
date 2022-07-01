import React from 'react'
import { ACCOUNT_NAME } from '../../../utils/accountName'
import styles from './PageChanges.module.scss'

const PageChanges: React.FC = () => (
  <div className={styles.information}>
    <p>Last edited by {ACCOUNT_NAME}</p>
    <p>Today at 9:38 PM</p>
  </div>
)

export default PageChanges
