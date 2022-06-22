import React from 'react'
import { useDispatch } from 'react-redux'

import styles from './SwitchButton.module.scss'
import switchSvg from '../../../assets/img/sidebar-twoArrows.svg'
import { setSidebarOpen } from '../../../redux/sidebarSlice/slice'

const SwitchOpenButton: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <div
      className={styles.switchBtnOpen}
      onClick={() => dispatch(setSidebarOpen())}
    >
      <img src={switchSvg} alt='Switch' />
    </div>
  )
}

export default SwitchOpenButton
