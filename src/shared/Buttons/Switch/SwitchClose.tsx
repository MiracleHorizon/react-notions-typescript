import React from 'react'
import { useDispatch } from 'react-redux'

import styles from './SwitchButton.module.scss'
import switchSvg from '../../../assets/img/sidebar-twoArrows.svg'
import { setSidebarClose } from '../../../redux/sidebarSlice/slice'

const SwitchCloseButton: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <div
      className={styles.switchBtnClose}
      onClick={() => dispatch(setSidebarClose())}
    >
      <img src={switchSvg} alt='Switch' />
    </div>
  )
}

export default SwitchCloseButton
