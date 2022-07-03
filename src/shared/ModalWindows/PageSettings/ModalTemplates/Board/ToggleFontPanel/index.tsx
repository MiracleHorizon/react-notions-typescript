import React, { Fragment, useState } from 'react'

import Separator from 'shared/Separator'
import ToggleFontButton from 'shared/Buttons/ToggleFont'

import { PAGE_FONTS as fonts } from 'redux/optionsSlice/optionsStorage'
import styles from './ToggleFontBar.module.scss'

const ToggleFontPanel: React.FC = () => {
  const [activeFont, setActiveFont] = useState<string>('Default')

  return (
    <Fragment>
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
    </Fragment>
  )
}

export default ToggleFontPanel
