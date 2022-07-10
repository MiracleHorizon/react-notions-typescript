import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPortal } from 'react-dom'

import { isMoveToTrashAlertOpenSelector } from 'redux/alertsSlice/selectors'
import { hideMoveToTrashAlert } from 'redux/alertsSlice/slice'
import {
  Wrapper,
  Container,
  TitleContainer,
  Title,
  UndoButtonContainer,
  UndoTitle,
} from './MoveToTrashAlert.styles'

const MoveToTrashAlert: React.FC = () => {
  const isOpen = useSelector(isMoveToTrashAlertOpenSelector)
  const dispatch = useDispatch()

  const onHideAlert = useCallback((): void => {
    setTimeout(() => dispatch(hideMoveToTrashAlert()), 5000)
  }, [dispatch])

  useEffect(() => {
    isOpen && onHideAlert()
  }, [dispatch, isOpen, onHideAlert])

  return createPortal(
    <Wrapper>
      <Container isActive={isOpen}>
        <TitleContainer>
          <Title>Moved to trash</Title>
        </TitleContainer>
        <UndoButtonContainer role='button'>
          <UndoTitle>Undo</UndoTitle>
        </UndoButtonContainer>
      </Container>
    </Wrapper>,
    document.getElementById('root') as HTMLElement
  )
}

export default MoveToTrashAlert
