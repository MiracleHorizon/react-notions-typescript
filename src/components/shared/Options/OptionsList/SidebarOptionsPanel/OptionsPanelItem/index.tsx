import React, { FC, memo } from 'react'

import Props from './OptionsPanelItem.types'
import { StyledItem, Title } from './OptionsPanelItem.styles'

const SidebarOptionsPanelItem: FC<Props> = memo(props => (
  <StyledItem onClick={props.onClickAction}>
    <props.IconSvg />
    <Title>{props.title}</Title>
  </StyledItem>
))

export default SidebarOptionsPanelItem
