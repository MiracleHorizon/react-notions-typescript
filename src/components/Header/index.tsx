import React from 'react'

import styles from './Header.module.scss'
import SwitchOpenButton from '../../shared/Buttons/Switch/SwitchOpen'

const Header = () => {
  return (
    <div className={styles.header}>
      <SwitchOpenButton />
    </div>
  )
}

export default Header
