import React, { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { AddCommentSvg } from 'components/ui/SVG'

import { useAppDispatch } from 'redux/store'
import { updatePage } from 'api/reduxAsyncThunks'
import { currentPageSelector } from 'redux/selectors'
import objectCopier from 'helpers/objectCopier'
import { StyledOption, Title } from '../PageDecorButton.styles'

const AddFirstCommentButton: FC = memo(() => {
  const pageCopy = objectCopier(useSelector(currentPageSelector))
  const appDispatch = useAppDispatch()

  const onAddFirstComment = useCallback((): void => {
    pageCopy.commentsInfo.isHasComments = true
    pageCopy.commentsInfo.comments = []

    appDispatch(updatePage(pageCopy))
  }, [appDispatch, pageCopy])

  return (
    <StyledOption role='button' onClick={onAddFirstComment}>
      <AddCommentSvg />
      <Title>Add comment</Title>
    </StyledOption>
  )
})

export default AddFirstCommentButton
