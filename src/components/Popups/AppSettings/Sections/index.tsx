import React from 'react'

import AppSettingsActionsBar from './ActionsBar'
import { SectionWrapper, ContentContainer } from './SelectedSection.styles'

const SelectedSection: React.FC = () => {
  return (
    <SectionWrapper>
      <ContentContainer>
        <AppSettingsActionsBar />
      </ContentContainer>
    </SectionWrapper>
  )
}

export default SelectedSection
