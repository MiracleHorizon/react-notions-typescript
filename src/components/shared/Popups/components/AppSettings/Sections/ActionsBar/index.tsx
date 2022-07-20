import React, { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { FilledButton, GrayOutlineButton } from 'components/ui'
import { closeAppSettingsPopup } from 'redux/actions'
import { Wrapper, ActionsContainer } from './AppSettingsActionsBar.styles'

const AppSettingsActionsBar: FC = () => {
  const dispatch = useDispatch()

  const onUpdateAppSettings = useCallback((): void => {
    // Возможно, пост запрос.
  }, [])

  const onCloseAppSettingsPopup = useCallback((): void => {
    dispatch(closeAppSettingsPopup())
  }, [dispatch])

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
