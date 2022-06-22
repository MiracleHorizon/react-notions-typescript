import React from 'react'
import { useSelector } from 'react-redux'

import SwitchCloseButton from '../../../shared/Buttons/Switch/SwitchClose'
import { isHoverOnSidebarSelector } from '../../../redux/sidebarSlice/selectors'

import avatar from '../../../assets/img/appImgs/avatar.jpg'
import styles from './Switcher.module.scss'

const SidebarSwitcherBar: React.FC = () => {
  const isHover = useSelector(isHoverOnSidebarSelector)

  return (
    <div className={styles.switcher}>
      <img src={avatar} alt='Avatar' className={styles.avatar} />
      <h2>Денис Алексеенко's Notion</h2>
      {isHover && <SwitchCloseButton />}
    </div>
  )
}

export default SidebarSwitcherBar
