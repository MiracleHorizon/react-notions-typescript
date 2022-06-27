import React from 'react'

import styles from './HotkeysBar.module.scss'

const HotkeysBar: React.FC = () => {
  return (
    <footer className={styles.hotkeysBar}>
      <ul>
        <li>
          <span className={styles.img}>↑↓</span>
          <span>Select</span>
        </li>
        <li>
          <span className={styles.img}>↵</span>
          <span>Open</span>
        </li>
      </ul>
    </footer>
  )
}

export default HotkeysBar
