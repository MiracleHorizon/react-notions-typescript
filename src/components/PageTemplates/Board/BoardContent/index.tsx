import React from 'react'

import QuickFindModal from '../../../../shared/ModalWindows/QuickSearch'
import styles from './BoardContent.module.scss'

const BoardContent: React.FC = () => {
  return (
    <div className={styles.content}>
      <QuickFindModal />
    </div>
  )
}

export default BoardContent
