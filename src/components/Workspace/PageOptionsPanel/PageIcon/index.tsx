import React from 'react'
import { useSelector } from 'react-redux'

import styles from './ChangePageIcon.module.scss'
import SwitchDecorationNavbar from '../SwitchDecoration/Navbar'

const ChangePageIcon: React.FC = () => {
  // const categories = useSelector(iconCategoriesSelector) //! сделать в cover

  return (
    <div className={styles.root}>
      {/*<SwitchDecorationNavbar categories={categories} purpose='icon' />*/}
    </div>
  )
}

export default ChangePageIcon
