import React, { FC, memo, useCallback } from 'react'

import Props from './SidebarOptionsPanel.types'
import SidebarOptionsPanelItem from './OptionsPanelItem'
import { StyledPanel, OptionsList } from './SidebarOptionsPanel.styles'

const SidebarOptionsPanel: FC<Props> = memo(({ options }) => {
  const optionsHandler = useCallback((): JSX.Element | JSX.Element[] => {
    return Array.isArray(options) ? (
      options.map(item => <SidebarOptionsPanelItem {...item} />)
    ) : (
      <SidebarOptionsPanelItem {...options} />
    )
  }, [options])

  return (
    <StyledPanel>
      <OptionsList>{optionsHandler()}</OptionsList>
    </StyledPanel>
  )
})

export default SidebarOptionsPanel
