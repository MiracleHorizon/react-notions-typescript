import React from 'react'

import styles from './SwitchDecoration.module.scss'
import DecorLists from './DecorLists'

const SwitchDecoration: React.FC = () => {
  const selectedCategory = ''

  return (
    <div className={styles.contentBlock}>
      <div className={styles.content}>
        {selectedCategory === '' ? <DecorLists /> : null}
      </div>
    </div>
  )
}

export default SwitchDecoration
