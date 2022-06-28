import React from 'react'
import { useDispatch } from 'react-redux'

import {
  setSidebarClose,
  setSidebarOpen,
} from '../../../redux/sidebarSlice/slice'
import styles from './SwitchButton.module.scss'
import switchSvg from '../../../assets/img/sidebar-twoArrows.svg'

interface SwitchSidebarBtnProps {
  purpose: string
}

interface SwitchSidebarBtnOptions {
  className: string
  onClick: () => void
}

enum SwitchSidebarBtnPurpose {
  OPEN = 'open',
  CLOSE = 'close',
}

const SwitchSidebarButton: React.FC<SwitchSidebarBtnProps> = ({ purpose }) => {
  const dispatch = useDispatch()
  const buttonPurposeHandler = (): SwitchSidebarBtnOptions => {
    switch (purpose) {
      case SwitchSidebarBtnPurpose.OPEN:
        return {
          className: `${styles.switchSidebarBtn} ${styles.open}`,
          onClick: () => dispatch(setSidebarOpen()),
        }
      case SwitchSidebarBtnPurpose.CLOSE:
        return {
          className: `${styles.switchSidebarBtn} ${styles.close}`,
          onClick: () => dispatch(setSidebarClose()),
        }
      default:
        return {
          className: `${styles.switchSidebarBtn}`,
          onClick: () => {},
        }
    }
  }

  return (
    <div {...buttonPurposeHandler()}>
      <img src={switchSvg} alt='Switch' />
    </div>
  )
}

export default SwitchSidebarButton
export { SwitchSidebarBtnPurpose }
