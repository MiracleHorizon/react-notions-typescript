import React, { useEffect, useState } from 'react'

import styles from './Tooltip.module.scss'

interface ITooltipProps {
  isOpen: boolean
  description: string
}

const Tooltip: React.FC<ITooltipProps> = ({ isOpen, description }) => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    isOpen
      ? setTitle('Click to hide section')
      : setTitle('Click to show section')
  }, [isOpen])

  return (
    <React.Fragment>
      <div className={styles.tooltip}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </div>
    </React.Fragment>
  )
}

export default Tooltip
