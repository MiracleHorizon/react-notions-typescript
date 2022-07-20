import React, { FC, memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { SidebarLoupeSvg, SettingsGearSvg } from 'components/ui/SVG'
import { openAppSettingsPopup, openQuickSearchPopup } from 'redux/actions'
import * as Panel from './AppOptionsPanel.styles'

const AppOptionsPanel: FC = memo(() => {
  const dispatch = useDispatch()

  const onOpenQuickSearchPopup = useCallback((): void => {
    dispatch(openQuickSearchPopup())
  }, [dispatch])

  const onOpenAppSettingsPopup = useCallback((): void => {
    dispatch(openAppSettingsPopup())
  }, [dispatch])

  return (
    <Panel.Wrapper>
      <Panel.List>
        <Panel.Option onClick={onOpenQuickSearchPopup}>
          <SidebarLoupeSvg />
          <Panel.OptionTitle>Quick Search</Panel.OptionTitle>
        </Panel.Option>
        <Panel.Option onClick={onOpenAppSettingsPopup}>
          <SettingsGearSvg />
          <Panel.OptionTitle>Settings & Themes</Panel.OptionTitle>
        </Panel.Option>
      </Panel.List>
    </Panel.Wrapper>
  )
})

export default AppOptionsPanel
