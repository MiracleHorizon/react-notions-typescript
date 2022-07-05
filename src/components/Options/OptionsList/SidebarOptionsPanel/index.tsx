import React from 'react'

import SidebarOptionsPanelItem from './OptionsPanelItem'
import { OptionsPanelProps } from './SidebarOptionsPanel.types'
import { StyledPanel, OptionsList } from './SidebarOptionsPanel.styles'

const SidebarOptionsPanel: React.FC<OptionsPanelProps> = ({ options }) => {
  const optionsHandler = (): JSX.Element | JSX.Element[] => {
    return Array.isArray(options) ? (
      options.map(item => <SidebarOptionsPanelItem {...item} />)
    ) : (
      <SidebarOptionsPanelItem {...options} />
    )
  }

  return (
    <StyledPanel>
      <OptionsList>{optionsHandler()}</OptionsList>
    </StyledPanel>
  )
}

export default SidebarOptionsPanel
