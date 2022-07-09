import React from 'react'
import { useDispatch } from 'react-redux'

import {
  openAppSettingsPopup,
  openQuickSearchPopup,
} from 'redux/popupsSlice/slice'
import searchSvg from 'assets/img/inputs/search.svg'
import updatesSvg from 'assets/img/optionsImgs/updates.svg'
import settingsSvg from 'assets/img/optionsImgs/settings.svg'
import {
  StyledPanel,
  OptionsList,
  Option,
  Title,
  Icon,
} from './AppOptionsPanel.styles'

const AppOptionsPanel: React.FC = () => {
  const dispatch = useDispatch()

  const onOpenQuickSearch = (): void => {
    dispatch(openQuickSearchPopup())
  }

  const onOpenAppSettingsPopup = (): void => {
    dispatch(openAppSettingsPopup())
  }

  return (
    <StyledPanel>
      <OptionsList>
        <Option onClick={onOpenQuickSearch}>
          <Icon src={searchSvg} alt='Option' />
          <Title>Quick Search</Title>
        </Option>
        <Option>
          <Icon src={updatesSvg} alt='Option' />
          <Title>All Updates</Title>
        </Option>
        <Option onClick={onOpenAppSettingsPopup}>
          <Icon src={settingsSvg} alt='Option' />
          <Title>Settings & Themes</Title>
        </Option>
      </OptionsList>
    </StyledPanel>
  )
}

export default AppOptionsPanel
