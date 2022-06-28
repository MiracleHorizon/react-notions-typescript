import React from 'react'

import SwitchSidebarButton from '../../../shared/Buttons/SwitchSidebar'
import { ACCOUNT_NAME } from '../../../utils/accountName'
import avatarSvg from '../../../assets/img/appImgs/avatar.jpg'
import styles from './Switcher.module.scss'

interface SwitcherBarProps {
  isHovering: boolean
}

const SidebarSwitcherBar: React.FC<SwitcherBarProps> = ({ isHovering }) => {
  return (
    <div className={styles.switcher}>
      <img src={avatarSvg} alt='Avatar' className={styles.avatar} />
      <h2>{ACCOUNT_NAME}'s Notion</h2>
      {isHovering && <SwitchSidebarButton purpose='close' />}
    </div>
  )
}

export default SidebarSwitcherBar
