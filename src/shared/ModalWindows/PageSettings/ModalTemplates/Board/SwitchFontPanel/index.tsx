import React, { Fragment, useState } from 'react'

import Separator from 'shared/Separator'
import ToggleFontButton from 'shared/Buttons/ToggleFont'
import { PAGE_FONTS } from 'redux/optionsSlice/optionsStorage'
import { Wrapper, FontsContainer, Title } from './SwitchFontPanel.styles'

const SwitchFontPanel: React.FC = () => {
  const [activeFont, setActiveFont] = useState<string>('Default')

  return (
    <Fragment>
      <Wrapper>
        <Title>Style</Title>
        <FontsContainer>
          {PAGE_FONTS.map(({ title, fontFamily, tooltipTitle }) => (
            <ToggleFontButton
              key={fontFamily}
              {...{ title, fontFamily, tooltipTitle }}
              activeFont={activeFont}
              setActiveFont={setActiveFont}
            />
          ))}
        </FontsContainer>
      </Wrapper>
      <Separator />
    </Fragment>
  )
}

export default SwitchFontPanel
