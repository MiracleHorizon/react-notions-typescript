import React, { FC } from 'react'

import AppSettingsActionsBar from './ActionsBar'
import { SectionWrapper, ContentContainer } from './SelectedSection.styles'

const SelectedSection: FC = () => {
  return (
    <SectionWrapper>
      <ContentContainer>
        <AppSettingsActionsBar />
      </ContentContainer>
    </SectionWrapper>
  )
}

export default SelectedSection
