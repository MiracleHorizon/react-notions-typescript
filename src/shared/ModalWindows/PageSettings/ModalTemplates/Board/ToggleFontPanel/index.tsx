import React, { useState } from 'react'
import Separator from '../../../../../Separator'
import ToggleFontButton from '../../../../../Buttons/ToggleFont'
import { PAGE_FONTS as fonts } from '../../../../../../redux/optionsSlice/optionsStorage'
import styles from './ToggleFontBar.module.scss'

const ToggleFontPanel: React.FC = () => {
  const [activeFont, setActiveFont] = useState<string>('Default')

  return (
    <React.Fragment>
      <div className={styles.bar}>
        <h5>STYLE</h5>
        <div className={styles.fontsBlock}>
          {fonts.map(({ title, tooltipTitle }) => (
            <ToggleFontButton
              key={title}
              title={title}
              tooltipTitle={tooltipTitle}
              activeFont={activeFont}
              setActiveFont={setActiveFont}
            />
          ))}
        </div>
      </div>
      <Separator />
    </React.Fragment>
  )
}

export default ToggleFontPanel
