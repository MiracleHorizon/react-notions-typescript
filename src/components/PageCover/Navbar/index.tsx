import React from 'react'
import { useSelector } from 'react-redux'

import SwitchCoverNavbarItem from './NavbarItem'
import { categoriesSelector } from '../../../redux/switchCoverSlice/selectors'
import styles from './Navbar.module.scss'

const SwitchCoverNavbar: React.FC = () => {
  const categories = useSelector(categoriesSelector)

  return (
    <div className={styles.navbar}>
      {categories.map(category => (
        <SwitchCoverNavbarItem key={category} category={category} />
      ))}
      <div className={styles.removeBtnBlock}>
        <div role='button'>Remove</div>
      </div>
    </div>
  )
}

export default SwitchCoverNavbar
