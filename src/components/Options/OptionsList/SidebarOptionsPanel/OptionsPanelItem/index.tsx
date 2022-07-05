import React from 'react'

import { StyledItem, Title } from './OptionsPanelItem.styles'
import { OptionsItemProps } from '../SidebarOptionsPanel.types'

const SidebarOptionsPanelItem: React.FC<OptionsItemProps> = props => (
  <StyledItem onClick={props.action}>
    <props.IconSvg />
    <Title>{props.title}</Title>
  </StyledItem>
)

export default SidebarOptionsPanelItem
