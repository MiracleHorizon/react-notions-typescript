import React from 'react'
import styles from '../Tooltip.module.scss'

interface ITooltipTitle {
  title: string
}

const SidebarCategoryTooltip: React.FC<ITooltipTitle> = ({ title }) => {
  return (
    <div className={styles.tooltip} style={{ left: '-75px', top: '26px' }}>
      <span className={styles.title}>{title}, and more...</span>
    </div>
  )
}

export default SidebarCategoryTooltip
