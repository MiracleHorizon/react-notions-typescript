import React from 'react'
import ChangePageIcon from '../../../components/Workspace/PageOptionsPanel/PageIcon'
import styles from './ChangePageIcon.module.scss'

const ChangePageIconModal: React.FC = () => {
  return (
    <div className={styles.modal}>
      <ChangePageIcon />
    </div>
  )
}

export default ChangePageIconModal
