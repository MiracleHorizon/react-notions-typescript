import React, { FC, memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useAppDispatch } from 'redux/store'
import { hideMoveToTrashAlert } from 'redux/actions'
import { moveToTrashAlertSelector } from 'redux/selectors'
import {
  Container,
  TitleContainer,
  Title,
  UndoButtonContainer,
  UndoTitle,
} from './MoveToTrashAlert.styles'

const MoveToTrashAlert: FC = memo(() => {
  const { isOpen, pageId } = useSelector(moveToTrashAlertSelector)
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const onHideAlert = useCallback((): void => {
    if (isOpen) setTimeout(() => dispatch(hideMoveToTrashAlert()), 5000)
  }, [dispatch, isOpen])

  const onRestorePage = useCallback((): void => {
    // appDispatch(restoreNotionPage(pageId))
    dispatch(hideMoveToTrashAlert())
  }, [appDispatch, dispatch, pageId])

  useEffect(() => {
    isOpen && onHideAlert()
  }, [dispatch, isOpen, onHideAlert])

  return (
    <Container isActive={isOpen}>
      <TitleContainer>
        <Title>Moved to trash</Title>
      </TitleContainer>
      <UndoButtonContainer role='button' onClick={onRestorePage}>
        <UndoTitle>Undo</UndoTitle>
      </UndoButtonContainer>
    </Container>
  )
})

export default MoveToTrashAlert
