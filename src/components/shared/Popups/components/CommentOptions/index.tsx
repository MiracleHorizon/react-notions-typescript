import React, { FC, memo, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import Popup from 'components/shared/Popups/index'
import CommentPopupOption from 'components/shared/Options/CommentPopupOption'
import { DeleteTrashSvg, PencilSvg } from 'components/ui/SVG'

import { IComment } from 'redux/types'
import { useAppDispatch } from 'redux/store'
import { updatePage } from 'api/reduxAsyncThunks'
import {
  closeCommentOptionsPopup,
  setDeleteCommentAlertComment,
  showDeleteCommentAlert,
} from 'redux/actions'
import {
  commentOptionsPopupSelector,
  currentPageCopySelector,
} from 'redux/selectors'
import Wrapper from './CommentOptionsPopup.styles'

const CommentOptionsPopup: FC = memo(() => {
  const { commentId, coords } = useSelector(commentOptionsPopupSelector)
  const currentPageCopy = useSelector(currentPageCopySelector)
  const popupRef = useRef<HTMLDivElement>(null)
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const onStartEditComment = useCallback((): void => {
    currentPageCopy.commentsInfo.comments.forEach((comment: IComment) => {
      if (comment._id === commentId) comment.isNowEditing = true
    })

    dispatch(closeCommentOptionsPopup())
    appDispatch(updatePage(currentPageCopy))
  }, [appDispatch, dispatch, currentPageCopy, commentId])

  const onDeleteComment = useCallback((): void => {
    dispatch(closeCommentOptionsPopup())
    dispatch(showDeleteCommentAlert())
    dispatch(setDeleteCommentAlertComment(commentId))
  }, [dispatch, commentId])

  const handleClickOutside = useCallback((): void => {
    dispatch(closeCommentOptionsPopup())
  }, [dispatch])

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup>
      <Wrapper ref={popupRef} coords={coords}>
        <CommentPopupOption
          title='Edit comment'
          IconSvg={PencilSvg}
          onClickAction={onStartEditComment}
        />
        <CommentPopupOption
          title='Delete comment'
          IconSvg={DeleteTrashSvg}
          onClickAction={onDeleteComment}
        />
      </Wrapper>
    </Popup>
  )
})

export default CommentOptionsPopup
