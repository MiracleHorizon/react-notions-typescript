import React from 'react'

import styles from '../Tooltip.module.scss'

interface ISidebarOptionsTooltipProps {
  title: string
  description?: string
}

const SidebarOptionsTooltip: React.FC<ISidebarOptionsTooltipProps> = props => {
  const { title, description } = props

  return (
    <div className={styles.tooltip}>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
    </div>
  )
}

export default SidebarOptionsTooltip
