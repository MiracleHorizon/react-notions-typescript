import React from 'react'
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
  const onSelectPageFont = (): void => setActiveFont(title)
  const fontAbbreviationClass: string =
    styles.abbreviation + ' ' + onToggleFontFamily()

  return (
    <div role='button' className={styles.btn} onClick={onSelectPageFont}>
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
