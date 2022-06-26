import React from 'react'

import SwitchCoverNavbar from '../../../components/PageCover/Navbar'
import SwitchCoverContent from '../../../components/PageCover/SwitchCoverContent'
import styles from './SwitchCover.module.scss'

const SwitchCoverModal: React.FC = () => (
  <div className={styles.modal}>
    <div className={styles.switchCover}>
      <SwitchCoverNavbar />
      <SwitchCoverContent />
    </div>
  </div>
)

export default SwitchCoverModal
