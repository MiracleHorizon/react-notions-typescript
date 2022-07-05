import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import QuickSearchModal from 'shared/ModalWindows/QuickSearch'
import { openQuickSearchModal } from 'redux/modalsSlice/slice'
import { quickSearchModalSelector } from 'redux/modalsSlice/selectors'
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
  const isQuickSearchModalOpen = useSelector(quickSearchModalSelector)

  const dispatch = useDispatch()
  const onOpenQuickSearch = (): void => {
    dispatch(openQuickSearchModal())
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
        <Option>
          <Icon src={settingsSvg} alt='Option' />
          <Title>Settings & Members</Title>
        </Option>
      </OptionsList>
      {isQuickSearchModalOpen && <QuickSearchModal />}
    </StyledPanel>
  )
}

export default AppOptionsPanel
