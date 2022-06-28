import React, { useEffect, useState } from 'react'

import tooltipTitleHandler from '../../../utils/helpers/sidebarListTooltipHandler'
import styles from '../Tooltip.module.scss'

interface ITooltipProps {
  isOpen: boolean
  description: string
}

const SidebarListTooltip: React.FC<ITooltipProps> = props => {
  const { isOpen, description } = props
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    setTitle(tooltipTitleHandler(isOpen))
  }, [isOpen])

  return (
    <div className={styles.tooltip} style={{ left: '5px', top: '-50px' }}>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
    </div>
  )
}

export default SidebarListTooltip
