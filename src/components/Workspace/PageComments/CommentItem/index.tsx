import React, { FC, memo, useRef } from 'react'
import { useHover } from 'usehooks-ts'
import { useSelector } from 'react-redux'

import AuthorInfo from '../AuthorInfo'
import CommentEditField from '../CommentEditField'
import CommentOptionsBar from '../CommentOptions'

import Props from './CommentItem.types'
import { commentOptionsPopupSelector } from 'redux/selectors'
import { Wrapper, CommentContainer, Comment } from './CommentItem.styles'

const CommentItem: FC<Props> = memo(props => {
  const { _id, title, createdAt, isEdited, isResolved, isNowEditing, index } =
    props
  const { isOpen: isCommentOptionsPopupOpen, commentId } = useSelector(
    commentOptionsPopupSelector
  )
  // const notResolvedComments = useSelector()

  const commentItemRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(commentItemRef)

  return (
    <Wrapper ref={commentItemRef}>
      <CommentContainer>
        <AuthorInfo isEdited={isEdited} date={createdAt} time={createdAt} />
        {isNowEditing ? (
          <CommentEditField commentId={_id} title={title} />
        ) : (
          <Comment>{title}</Comment>
        )}
      </CommentContainer>
      {(isHovering || (isCommentOptionsPopupOpen && commentId === _id)) && (
        <CommentOptionsBar id={_id} isResolved={isResolved} index={index} />
      )}
    </Wrapper>
  )
})

export default CommentItem
