import React, { FC, memo, useCallback, useRef } from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import { useDispatch, useSelector } from 'react-redux'

import { useAppDispatch } from 'redux/store'
import { currentPageCopySelector, currentPageSelector } from 'redux/selectors'
import { updatePage } from 'api/reduxAsyncThunks'
import { renamePage } from 'redux/actions'
import Title from './PageTitle.styles'

const PageTitle: FC = memo(() => {
  const { _id, title } = useSelector(currentPageSelector)
  const currentPageCopy = useSelector(currentPageCopySelector)
  const titleValue = useRef<string>(title)
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const handleKeyDown = useCallback(
    (e: any): void => {
      if (e.code === 'Enter') {
        e.preventDefault()

        currentPageCopy.title = titleValue.current
        appDispatch(updatePage(currentPageCopy))
      }
    },
    [appDispatch, currentPageCopy]
  )

  const handleChange = useCallback(
    (e: ContentEditableEvent) => {
      titleValue.current = e.target.value

      dispatch(renamePage({ _id, title: e.target.value }))
    },
    [_id, dispatch]
  )

  const handleBlur = useCallback(() => {
    currentPageCopy.title = titleValue.current
    appDispatch(updatePage(currentPageCopy))
  }, [appDispatch, currentPageCopy])

  return (
    <Title>
      <ContentEditable
        placeholder='Untitled'
        html={titleValue.current}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      />
    </Title>
  )
})

export default PageTitle
