import React, { useState } from 'react'
import PageSettingsFontTooltip from '../../Tooltips/PageSettingsFont'
import styles from './ToggleFont.module.scss'

interface ToggleFontProps {
  title: string
  tooltipTitle: string
  activeFont: string
  setActiveFont: (title: string) => void
}

const ToggleFontButton: React.FC<ToggleFontProps> = props => {
  const { title, tooltipTitle, activeFont, setActiveFont } = props

  const onToggleFontFamily = () => {
    switch (title) {
      case 'Default':
        return styles.sansSerif
      case 'Serif':
        return styles.serif
      case 'Mono':
        return styles.mono
    }
  }
  const onSelectFontFamily = () => setActiveFont(title)
  const fontAbbreviationClass = styles.abbreviation + ' ' + onToggleFontFamily()

  return (
    <div role='button' className={styles.btn} onClick={onSelectFontFamily}>
      <div className={styles.fontBlock}>
        <span
          className={
            activeFont === title
              ? fontAbbreviationClass + ' ' + styles.activeFont
              : fontAbbreviationClass
          }
        >
          Ag
        </span>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  )
}

export default ToggleFontButton
