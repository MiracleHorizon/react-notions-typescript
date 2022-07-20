import React, { FC, memo, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import { useSelectItem } from 'hooks/mouse/useSelectItem'

import Popup from 'components/shared/Popups'
import { RedOutlineButton, GrayOutlineButton } from 'components/ui'

import { IComment } from 'redux/types'
import { useAppDispatch } from 'redux/store'
import { updatePage } from 'api/reduxAsyncThunks'
import { hideDeleteCommentAlert } from 'redux/actions'
import {
  currentPageCopySelector,
  deleteCommentAlertSelector,
} from 'redux/selectors'
import {
  Wrapper,
  ButtonsList,
  TitleContainer,
  StyledTitle,
} from '../PermanentlyDeleteAlert.styles'

const DeleteCommentAlert: FC = memo(() => {
  const currentPageCopy = useSelector(currentPageCopySelector)
  const { commentId } = useSelector(deleteCommentAlertSelector)
  const { activeItem, onSelectItem } = useSelectItem('Delete')
  const alertRef = useRef<HTMLDivElement>(null)
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const onPermanentlyDeleteComment = useCallback((): void => {
    currentPageCopy.commentsInfo.comments =
      currentPageCopy.commentsInfo.comments.filter((comment: IComment) => {
        return comment._id !== commentId
      })

    dispatch(hideDeleteCommentAlert())
    appDispatch(updatePage(currentPageCopy))
  }, [appDispatch, dispatch, commentId, currentPageCopy])

  const onCancelDelete = useCallback((): void => {
    dispatch(hideDeleteCommentAlert())
  }, [dispatch])

  useOnClickOutside(alertRef, onCancelDelete)

  return (
    <Popup inset>
      <Wrapper ref={alertRef}>
        <TitleContainer>
          <StyledTitle>Would you like to delete this comment?</StyledTitle>
        </TitleContainer>
        <ButtonsList>
          <RedOutlineButton
            title='Delete'
            action={onPermanentlyDeleteComment}
            activeItem={activeItem}
            onSelect={onSelectItem}
          />
          <GrayOutlineButton
            title='Cancel'
            action={onCancelDelete}
            activeItem={activeItem}
            onSelect={onSelectItem}
          />
        </ButtonsList>
      </Wrapper>
    </Popup>
  )
})

export default DeleteCommentAlert
