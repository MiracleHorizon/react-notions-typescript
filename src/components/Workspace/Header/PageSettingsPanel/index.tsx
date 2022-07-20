import React, { FC, memo } from 'react'

import {
  ToggleRightSidebarButton,
  ToggleFavoriteButton,
  OpenPageSettingsButton,
} from 'components/ui'

import PanelWrapper from './PageSettingsPanel.styles'

const PageSettingsPanel: FC = memo(() => (
  <PanelWrapper>
    <ToggleRightSidebarButton />
    <ToggleFavoriteButton />
    <OpenPageSettingsButton />
  </PanelWrapper>
))

export default PageSettingsPanel
