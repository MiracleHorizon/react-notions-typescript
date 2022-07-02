import React from 'react'
import styles from './ChangePageIcon.module.scss'
import ChangePageIcon from 'components/Popups/PageIcon'

const SwitchPageIconModal: React.FC = () => {
  return (
    <div className={styles.modal}>
      <ChangePageIcon />
    </div>
  )
}

export default SwitchPageIconModal
