import React, { FC, memo, useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { useInput } from 'hooks/keyboard/input'
import Props from './CommentEditField.types'
import {
  AttachFileButton,
  CommentsInput,
  SubmitEditCommentButton,
  DiscardEditCommentButton,
  VerticalSeparator,
} from 'components/ui'
import { Wrapper, ActionButtonsContainer } from './CommentEditField.styles'
import { useAppDispatch } from '../../../../redux/store'
import { currentPageCopySelector } from '../../../../redux/reducers/notionsSlice/selectors'
import { updatePage } from '../../../../api/reduxAsyncThunks'
import { IComment } from '../../../../redux/reducers/notionsSlice/types'

const CommentEditField: FC<Props> = memo(({ commentId, title }) => {
  const { inputValue, onChangeInputValue } = useInput(title)
  const inputRef = useRef<HTMLInputElement>(null)
  const currentPageCopy = useSelector(currentPageCopySelector)
  const appDispatch = useAppDispatch()

  const onAttachCommentFile = useCallback((): void => {}, [])

  const onSubmitChanges = useCallback((): void => {
    currentPageCopy.commentsInfo.comments.forEach((comment: IComment) => {
      if (comment.isNowEditing) {
        comment.title = inputValue
        comment.isNowEditing = false
        comment.isEdited = true
        comment.updatedAt = new Date(Date.now()).toString()
      }
    })

    appDispatch(updatePage(currentPageCopy))
  }, [appDispatch, currentPageCopy, inputValue])

  const onDiscardChanges = useCallback((): void => {
    currentPageCopy.commentsInfo.comments.forEach((comment: IComment) => {
      if (comment.isNowEditing) comment.isNowEditing = false
    })

    appDispatch(updatePage(currentPageCopy))
  }, [appDispatch, currentPageCopy])

  useEffect(() => inputRef.current?.focus(), [])

  return (
    <Wrapper>
      <CommentsInput
        inputValue={inputValue}
        inputRef={inputRef}
        onChange={onChangeInputValue}
      />
      <ActionButtonsContainer>
        <AttachFileButton onClickAction={onAttachCommentFile} />
        <VerticalSeparator />
        <DiscardEditCommentButton onClickAction={onDiscardChanges} />
        <SubmitEditCommentButton
          isActive={inputValue !== ''}
          onClickAction={onSubmitChanges}
        />
      </ActionButtonsContainer>
    </Wrapper>
  )
})

export default CommentEditField
