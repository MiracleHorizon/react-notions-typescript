import React from 'react'

import styles from '../Tooltip.module.scss'

const AddNewPageToolkit: React.FC = () => {
  return (
    <div className={styles.tooltip} style={{ top: '30px' }}>
      <span className={styles.title}>Add a page</span>
      <span className={styles.description}>
        Only you can access these pages.
      </span>
    </div>
  )
}

export default AddNewPageToolkit
