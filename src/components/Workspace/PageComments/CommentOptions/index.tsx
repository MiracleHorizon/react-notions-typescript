import React, { FC, memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { OpenCommentOptionsButton, ToggleCommentStateButton } from 'components/ui'

import Props from './CommentOptionsBar.types'
import { setAllCurrentCommentsResolve } from 'redux/actions'
import Container from './CommentOptionsBar.styles'

const CommentOptionsBar: FC<Props> = memo(({ id, isResolved, index }) => {
  const dispatch = useDispatch()

  const onResolveCurrentCommentsList = useCallback((): void => {
    dispatch(setAllCurrentCommentsResolve())
  }, [dispatch])

  return (
    <>
      {index === 0 ? (
        <Container>
          <ToggleCommentStateButton
            isResolved={isResolved}
            action={onResolveCurrentCommentsList}
          />
          <OpenCommentOptionsButton
            commentId={id}
            index={index}
            floating={false}
          />
        </Container>
      ) : (
        <Container>
          <OpenCommentOptionsButton commentId={id} index={index} floating />
        </Container>
      )}
    </>
  )
})

export default CommentOptionsBar
