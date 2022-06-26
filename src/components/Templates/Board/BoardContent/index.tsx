import React from 'react'
import { useSelector } from 'react-redux'

import SwitchCoverModal from '../../../../shared/ModalWindows/SwitchCover'
import { isModalOpenSelector } from '../../../../redux/switchCoverSlice/selectors'
import styles from './BoardContent.module.scss'

const BoardContent: React.FC = () => {
  const isSwitchCoverModalOpen = useSelector(isModalOpenSelector)

  return (
    <div className={styles.content}>
      {isSwitchCoverModalOpen && <SwitchCoverModal />}
    </div>
  )
}

export default BoardContent
