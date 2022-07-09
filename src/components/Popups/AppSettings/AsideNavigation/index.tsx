import React from 'react'

import OptionsPanelItem from 'components/Options/OptionsList/SidebarOptionsPanel/OptionsPanelItem'
import { CustomizePageSvg } from 'shared/SVG'
import { AsideContainer } from './AsideNavigation.styles'

const options = [
  {
    title: 'My account',
    IconSvg: CustomizePageSvg,
    action: () => {},
  },
  {
    title: 'My settings & themes',
    IconSvg: CustomizePageSvg,
    action: () => {},
  },
  {
    title: 'Workspace settings',
    IconSvg: CustomizePageSvg,
    action: () => {},
  },
]

const AsideNavigation: React.FC = () => {
  return (
    <AsideContainer>
      {options.map(item => (
        <OptionsPanelItem {...item} />
      ))}
    </AsideContainer>
  )
}

export default AsideNavigation
