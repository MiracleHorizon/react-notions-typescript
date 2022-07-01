import React from 'react'
import ChangePageIcon from '../../../components/Workspace/PageContent/PageOptionsPanel/PageIcon'
import styles from './ChangePageIcon.module.scss'

const SwitchPageIconModal: React.FC = () => {
  return (
    <div className={styles.modal}>
      <ChangePageIcon />
    </div>
  )
}

export default SwitchPageIconModal
