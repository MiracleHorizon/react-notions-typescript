import React from 'react'
import { useSelector } from 'react-redux'

import ToggleFontButton from 'shared/Buttons/SwitchFont'
import { currentPageFontFamilySelector } from 'redux/workSpaceSlice/selectors'
import { PAGE_FONTS } from 'redux/optionsSlice/optionsStorage'
import { Wrapper, FontsContainer, Title } from './SwitchFontPanel.styles'

const SwitchFontPanel: React.FC = () => {
  const selectedFontFamily = useSelector(currentPageFontFamilySelector)

  return (
    <Wrapper>
      <Title>Style</Title>
      <FontsContainer>
        {PAGE_FONTS.map(({ title, fontFamily, tooltipTitle }) => (
          <ToggleFontButton
            key={fontFamily}
            {...{ title, fontFamily, tooltipTitle }}
            activeFont={selectedFontFamily}
          />
        ))}
      </FontsContainer>
    </Wrapper>
  )
}

export default SwitchFontPanel
