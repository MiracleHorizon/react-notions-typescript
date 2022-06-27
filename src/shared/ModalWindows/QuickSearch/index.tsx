import React from 'react'

import QuickSearch from '../../../components/QuickSearch'
import styles from './QuickFindModal.module.scss'

const QuickFindModal: React.FC = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal2}></div>
      <QuickSearch />
    </div>
  )
}

export default QuickFindModal
