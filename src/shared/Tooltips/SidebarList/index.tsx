import React, { useEffect, useState } from 'react'

import styles from '../Tooltip.module.scss'

interface ITooltipProps {
  isOpen: boolean
  description: string
}

const SidebarListTooltip: React.FC<ITooltipProps> = props => {
  const { isOpen, description } = props
  const [title, setTitle] = useState('Untitled')

  useEffect(() => {
    isOpen
      ? setTitle('Click to hide section')
      : setTitle('Click to show section')
  }, [isOpen])

  return (
    <React.Fragment>
      <div className={styles.tooltip} style={{ left: '5px', top: '-50px' }}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </div>
    </React.Fragment>
  )
}

export default SidebarListTooltip
