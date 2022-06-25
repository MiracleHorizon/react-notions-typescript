import React from 'react'

import styles from '../Tooltip.module.scss'

const ChangeIconTooltip: React.FC = () => {
  return (
    <div className={styles.tooltip} style={{ left: '-27px', top: '26px' }}>
      <span className={styles.title}>Change icon</span>
    </div>
  )
}

export default ChangeIconTooltip
