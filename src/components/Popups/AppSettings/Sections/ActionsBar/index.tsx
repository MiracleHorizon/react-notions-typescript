import React from 'react'
import { useDispatch } from 'react-redux'

import FilledButton from 'shared/Buttons/Filled'
import GrayOutlineButton from 'shared/Buttons/Outline/components/GrayOutlineButton'
import { closeAppSettingsPopup } from 'redux/popupsSlice/slice'
import { Wrapper, ActionsContainer } from './AppSettingsActionsBar.styles'

const AppSettingsActionsBar: React.FC = () => {
  const dispatch = useDispatch()

  const onUpdateAppSettings = (): void => {
    // Возможно, пост запрос.
  }

  const onCloseAppSettingsPopup = (): void => {
    dispatch(closeAppSettingsPopup())
  }

  return (
    <Wrapper>
      <ActionsContainer>
        <FilledButton title='Update' onClickAction={onUpdateAppSettings} />
        <GrayOutlineButton title='Cancel' action={onCloseAppSettingsPopup} />
      </ActionsContainer>
    </Wrapper>
  )
}

export default AppSettingsActionsBar
