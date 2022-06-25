import React from 'react'
import styles from '../Tooltip.module.scss'

interface PageFontTooltipProps {
  title: string
}

const PageSettingsFontTooltip: React.FC<PageFontTooltipProps> = ({ title }) => {
  return (
    <div className={styles.tooltip} style={{ top: '50px' }}>
      <span className={styles.title}>{title}</span>
    </div>
  )
}

export default PageSettingsFontTooltip
