import React, { FC, memo, useMemo } from 'react'

import { CustomizePageSvg } from 'components/ui/SVG'
import OptionsPanelItem from 'components/shared/Options/OptionsList/SidebarOptionsPanel/OptionsPanelItem'
import { AsideContainer } from './AsideNavigation.styles'

const AsideNavigation: FC = memo(() => {
  const options = useMemo(
    () => [
      {
        title: 'My account',
        IconSvg: CustomizePageSvg,
        onClickAction: () => {},
      },
      {
        title: 'My settings & themes',
        IconSvg: CustomizePageSvg,
        onClickAction: () => {},
      },
      {
        title: 'Workspace settings',
        IconSvg: CustomizePageSvg,
        onClickAction: () => {},
      },
    ],
    []
  )

  return (
    <AsideContainer>
      {options.map(item => (
        <OptionsPanelItem {...item} />
      ))}
    </AsideContainer>
  )
})

export default AsideNavigation
