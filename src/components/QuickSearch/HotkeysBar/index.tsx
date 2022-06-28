import React from 'react'
import styles from './HotkeysBar.module.scss'

const HotkeysBar: React.FC = () => (
  <footer className={styles.hotkeysBar}>
    <ul className={styles.list}>
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

export default HotkeysBar
