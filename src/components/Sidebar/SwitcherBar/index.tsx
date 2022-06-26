import React from 'react'
import { useSelector } from 'react-redux'

import SwitchCloseButton from '../../../shared/Buttons/SwitchSidebar/SwitchClose'
import { isHoverOnSidebarSelector } from '../../../redux/sidebarSlice/selectors'
import { ACCOUNT_NAME } from '../../../utils/accountName'
import avatar from '../../../assets/img/appImgs/avatar.jpg'
import styles from './Switcher.module.scss'

const SidebarSwitcherBar: React.FC = () => {
  const isHovered = useSelector(isHoverOnSidebarSelector) //!

  return (
    <div className={styles.switcher}>
      <img src={avatar} alt='Avatar' className={styles.avatar} />
      <h2>{ACCOUNT_NAME}'s Notion</h2>
      {isHovered && <SwitchCloseButton />}
    </div>
  )
}

export default SidebarSwitcherBar
