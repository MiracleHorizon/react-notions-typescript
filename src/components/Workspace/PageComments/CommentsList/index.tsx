import React, { FC, memo } from 'react'

import CommentItem from '../CommentItem'

import { IComment } from 'redux/types'
import StyledList from './CommentsList.stypes'

const CommentsList: FC<{ comments: IComment[] }> = memo(({ comments }) => (
  <StyledList>
    {comments.map((comment, index) => (
      <CommentItem key={comment._id} {...comment} index={index} />
    ))}
  </StyledList>
))

export default CommentsList
