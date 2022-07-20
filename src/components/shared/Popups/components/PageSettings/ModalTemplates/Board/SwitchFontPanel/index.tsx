import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { SwitchFontButton } from 'components/ui'

import { currentPageSelector } from 'redux/selectors'
import { PAGE_FONTS } from 'redux/reducers/optionsSlice/optionsStorage'
import { Wrapper, FontsContainer, Title } from './SwitchFontPanel.styles'

const SwitchFontPanel: FC = () => {
  const {
    pageSettings: { selectedFont },
  } = useSelector(currentPageSelector)

  return (
    <Wrapper>
      <Title>Style</Title>
      <FontsContainer>
        {PAGE_FONTS.map(({ title, fontFamily, tooltipTitle }) => (
          <SwitchFontButton
            key={fontFamily}
            selectedFont={selectedFont}
            {...{ title, fontFamily, tooltipTitle }}
          />
        ))}
      </FontsContainer>
    </Wrapper>
  )
}

export default SwitchFontPanel
